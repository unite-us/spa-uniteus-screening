import React from 'react';
import { shallow } from 'enzyme';
import { MOCK_PROVIDERS } from 'staticData';
import ServiceProvidersList from './ServiceProvidersList';

describe('ServiceProvidersList', () => {
  const props = {
    providers: [
      MOCK_PROVIDERS[0],
      MOCK_PROVIDERS[1],
    ],
    addToSelectedProviders: jest.fn(),
    header: 'Housing & Shelter',
  };

  it('renders', () => {
    const comp = shallow(<ServiceProvidersList {...props} />);

    expect(comp.find('BaseCardHeader').prop('title')).toBe('Housing & Shelter');
    expect(comp.find('.service-provider-list')).toHaveLength(1);
    expect(comp.find('.service-provider-list__list')).toHaveLength(1);
    expect(comp.find('ServiceProviderListItem')).toHaveLength(2);
  });

  it('adds selected provider ids to state', () => {
    const comp = shallow(<ServiceProvidersList {...props} />);

    const provider1 = MOCK_PROVIDERS[0];
    const provider2 = MOCK_PROVIDERS[1];
    comp.instance().addSelectedProvider(provider1);
    comp.instance().addSelectedProvider(provider2);

    expect(comp.state()).toEqual({
      selectedProviderIds: [provider1.id, provider2.id],
      toggleText: 'Deselect All',
    });
  });

  it('selects all providers when toggleSelectedGroups is called and no providers are selected', () => {
    const provider1 = MOCK_PROVIDERS[0];
    const provider2 = MOCK_PROVIDERS[1];

    const comp = shallow(<ServiceProvidersList {...props} />);
    comp.instance().toggleSelectedGroups();

    expect(comp.state()).toEqual({
      selectedProviderIds: [
        provider1.id,
        provider2.id,
      ],
      toggleText: 'Deselect All',
    });
  });

  it('removes all selected providers id from state when toggleSelectedGroups is called and all providers are selected', () => {
    const comp = shallow(<ServiceProvidersList {...props} />);

    const provider1 = MOCK_PROVIDERS[0];
    const provider2 = MOCK_PROVIDERS[1];
    comp.instance().addSelectedProvider(provider1);
    comp.instance().addSelectedProvider(provider2);

    comp.instance().toggleSelectedGroups();

    expect(comp.state()).toEqual({
      selectedProviderIds: [],
      toggleText: 'Select All',
    });
  });

  it('displays the no providers text', () => {
    const noProvidersProps = {
      providers: [],
      addToSelectedProviders: jest.fn(),
      header: 'Housing & Shelter',
    };

    const comp = shallow(<ServiceProvidersList {...noProvidersProps} />);
    expect(comp.find('.empty-providers').text()).toBe('No Organizations Found');
    expect(comp.find('.service-provider-list__list-item')).toHaveLength(0);
  });

  xit('clicking a provider button will add id to state', () => {
    const comp = shallow(<ServiceProvidersList {...props} />);
    const provider1 = MOCK_PROVIDERS[0];
    const button = comp.find('#provider-0-btn');

    button.simulate('click');

    expect(comp.state()).toEqual({
      selectedProviderIds: [
        provider1.id,
      ],
      toggleText: 'Select All',
    });

  });

  xit('toggling the provider button a provider button will add id to state then remove it', () => {
    const comp = shallow(<ServiceProvidersList {...props} />);

    const provider1 = MOCK_PROVIDERS[0];
    const provider2 = MOCK_PROVIDERS[1];

    const button1 = comp.find('#provider-0-btn');
    const button2 = comp.find('#provider-1-btn');

    button1.simulate('click');
    button2.simulate('click');

    expect(comp.state()).toEqual({
      selectedProviderIds: [
        provider1.id,
        provider2.id,
      ],
      toggleText: 'Deselect All',
    });

    button1.simulate('click');
    button2.simulate('click');

    expect(comp.state()).toEqual({
      selectedProviderIds: [],
      toggleText: 'Select All',
    });
  });


});
