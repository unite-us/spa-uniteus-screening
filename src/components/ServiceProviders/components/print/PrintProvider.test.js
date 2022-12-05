import React from 'react';
import { shallow } from 'enzyme';
import { MOCK_PROVIDERS } from 'staticData';
import PrintProvider from './PrintProvider';

describe('PrintProvider', () => {
  const props = {
    provider: MOCK_PROVIDERS[0],
    googleMapsApiKey: '122',
  };

  it('renders', () => {
    const comp = shallow(<PrintProvider {...props} />);

    expect(comp.find('h3').text()).toBe('Clinton Housing Development Co. Inc.');
    expect(comp.find('ServiceProviderListItem')).toHaveLength(1);
    expect(comp.find('StaticProviderMap')).toHaveLength(1);
  });
});
