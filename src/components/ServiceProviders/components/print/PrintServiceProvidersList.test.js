import React from 'react';
import { shallow } from 'enzyme';
import { NEEDS } from 'staticData';
import PrintServiceProvidersList from './PrintServiceProvidersList';

describe('PrintServiceProvidersList', () => {
  it('renders', () => {
    const props = {
      selectedProviders: [
        {
          key: 'Health',
          providers: [NEEDS[0].groups[0].id],
        },
      ],
      googleMapsApiKey: '123&son',
      needs: NEEDS,
      client: {
        full_name: 'Some Client',
      },
    };

    const comp = shallow(<PrintServiceProvidersList {...props} />);

    expect(comp.find('h2').at(0).text()).toBe('Some Client');
    expect(comp.find('h2').at(1).text()).toBe('Health Providers');
    expect(comp.find('.print-service-providers-list__providers')).toHaveLength(1);
    // expect(comp.find('PrintProvider')).toHaveLength(1);
  });

  it('returns if selectedProviders are empty', () => {
    const emptyProps = {
      selectedProviders: [
        {
          key: 'Fire',
          providers: ['1'],
        },
      ],
      googleMapsApiKey: '123&son',
      needs: [
        ...NEEDS,
        {
          service_type: {
            name: 'Fire',
          },
          providers: [],
        }
      ],
      client: {
        full_name: 'Some Client',
      },
    };
    const comp = shallow(<PrintServiceProvidersList {...emptyProps} />);


    expect(comp.type()).not.toBeNull();
  });
});
