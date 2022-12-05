import React from 'react';
import { shallow } from 'enzyme';
import { MOCK_PROVIDERS } from 'staticData';
import StaticProviderMap from './StaticProviderMap';

describe('StaticProviderMap', () => {
  const props = {
    provider: MOCK_PROVIDERS[0],
    googleMapsApiKey: '123&son',
  };

  it('renders', () => {
    const comp = shallow(<StaticProviderMap {...props} />);
    const map = comp.find('img');

    expect(map).toHaveLength(1);
    expect(map.prop('src')).toBe(
      'https://maps.googleapis.com/maps/api/staticmap' +
      '?&markers=%7C403%20West%2040th%20St.%2C%20Ney%20York' +
      '%2C%20NY%2010018%7C&&zoom=15&size=300x186&key=123&son'
    );
    expect(map.prop('alt')).toBe('provider static map');
  });

  it('returns null for a group without an address', () => {
    const providerProps = {
      provider: {
        ...MOCK_PROVIDERS[0],
        addresses: [],
      },
      googleMapsApiKey: '123&son',
    };
    const comp = shallow(<StaticProviderMap {...providerProps} />);

    expect(comp.type()).toBeNull();
  });
});
