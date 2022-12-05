import React from 'react';
import { shallow } from 'enzyme';
import { MOCK_PROVIDERS } from 'staticData';
import ServiceProviderListItem from './ServiceProviderListItem';

describe('ServiceProviderListItem', () => {
  const props = {
    provider: MOCK_PROVIDERS[0],
  };

  it('renders', () => {
    const comp = shallow(<ServiceProviderListItem {...props} />);


    expect(comp.find('.service-provider-list-item')).toHaveLength(1);
    expect(comp.find('AddressText')).toHaveLength(1);
    expect(comp.find('PhoneNumberDisplay')).toHaveLength(1);
    expect(comp.find('WebsiteUrl')).toHaveLength(1);
    expect(comp.find('HoursOfOperationWeek')).toHaveLength(1);
    expect(comp.find('h3').text())
      .toEqual('Clinton Housing Development Co. Inc.');
  });
});
