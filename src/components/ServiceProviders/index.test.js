import React from 'react';
import { shallow } from 'enzyme';
import ServiceProviders from './index';
import {
  NEEDS,
} from 'staticData';

describe('ServiceProviders', () => {
  const props = {
    needs: NEEDS,
    getSelectedProviders: jest.fn(),
  };

  it('returns null if no providers are given', () => {
    const emptyProps = {
      ...props,
      needs: [],
    };
    const comp = shallow(<ServiceProviders {...emptyProps} />);

    expect(comp.type()).toBeNull();
  });

  it('renders with lists of Service Providers', () => {
    const comp = shallow(<ServiceProviders {...props} />);

    expect(comp.find('.service-providers')).toHaveLength(1);
    expect(comp.find('ServiceProvidersList')).toHaveLength(1);
  });

  it('sets selected ids in state', () => {
    const comp = shallow(<ServiceProviders {...props} />);

    comp.instance().addToSelectedProviders('Health', ['6']);
    comp.instance().addToSelectedProviders('Word', ['2']);

    expect(comp.state()).toEqual({
      "selectedProviders": [
        { key: 'Health', providerIds: ['6'] },
        { key: 'Word', providerIds: ['2'] },
      ],
    });
  });
});
