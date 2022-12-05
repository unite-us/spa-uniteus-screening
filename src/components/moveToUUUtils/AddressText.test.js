import React from 'react';
import { shallow } from 'enzyme';
import AddressText from './AddressText';
import {
  MOCK_PROVIDERS,
} from 'staticData';

describe('AddressText', () => {
  const props = {
    address: MOCK_PROVIDERS[0].addresses[0],
  };

  it('returns null if no address is passed in', () => {
    const comp = shallow(<AddressText />);
    expect(comp.type()).toBeNull();
  });


  it('returns address', () => {
    const comp = shallow(<AddressText {...props} />);

    expect(comp.find('Icon')).toHaveLength(1);
    expect(comp.find('Icon').prop('icon')).toBe('IconMapMarker');
    expect(comp.find('.address-text')).toHaveLength(1);
    expect(comp.find('.address-text').text())
      .toBe('<Icon />403 West 40th St., Ney York, NY 10018');
  });
});
