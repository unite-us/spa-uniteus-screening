import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { isEmpty } from 'lodash';
import {
  BaseCard,
  BaseCardBody,
  BaseCardHeader,
} from '@unite-us/ui';
import {
  ServiceProviderListItem,
} from './index';


const TOGGLE_TEXT = {
  select: 'Select All',
  deselect: 'Deselect All',
};

const providerIsAlreadySelected = (providerId, providerIds) =>
  providerIds.includes(providerId);

const getSelectedText = (selectedProvidersCount, providersCount, text) => {
  if (selectedProvidersCount === 0) {
    return TOGGLE_TEXT.select;
  } else if (selectedProvidersCount === providersCount) {
    return TOGGLE_TEXT.deselect;
  }

  return text;
};

class ServiceProvidersList extends PureComponent {
  constructor(props) {
    super(props);

    this.addSelectedProvider = this.addSelectedProvider.bind(this);
    this.toggleSelectedGroups = this.toggleSelectedGroups.bind(this);
    this.addProviders = this.addProviders.bind(this);

    this.state = {
      selectedProviderIds: [],
      toggleText: TOGGLE_TEXT.select,
    };
  }

  addSelectedProvider(provider) {
    const selectedProviderIds = providerIsAlreadySelected(provider.id, this.state.selectedProviderIds) ?
      this.state.selectedProviderIds.filter(pId => pId !== provider.id) : [
        ...this.state.selectedProviderIds,
        provider.id,
      ];

    const toggleText = getSelectedText(selectedProviderIds.length, this.props.providers.length, this.state.toggleText);

    this.setState({
      selectedProviderIds,
      toggleText,
    }, () => {
      this.addProviders();
    });
  }

  addProviders() {
    this.props.addToSelectedProviders(this.props.header, this.state.selectedProviderIds);
  }

  toggleSelectedGroups() {
    const toggleText = this.state.toggleText === TOGGLE_TEXT.select ?
      TOGGLE_TEXT.deselect : TOGGLE_TEXT.select;

    const selectedProviderIds = this.state.toggleText === TOGGLE_TEXT.select ?
      this.props.providers.map(p => p.id) : [];

    this.setState({
      toggleText,
      selectedProviderIds,
    }, () => {
      this.addProviders();
    });
  }

  render() {
    const { providers, header } = this.props;
    const { /* toggleText, */selectedProviderIds } = this.state;
    const emptyProviders = (
      <div className="empty-providers">No Organizations Found</div>
    );

    return (
      <BaseCard className="service-provider-list">
        <BaseCardHeader title={header}>
          {/*
            <button className="service-provider-list__select-all" onClick={this.toggleSelectedGroups}>
              {toggleText}
            </button>
          */}
        </BaseCardHeader>
        <BaseCardBody withPadding className="service-provider-list__body">
          <ul className="service-provider-list__list list-unstyled">
            {
              isEmpty(providers) ? emptyProviders : providers.map((provider = {}/* , i */) => (
                <li
                  className="service-provider-list__list-item"
                  key={provider.id}
                >
                  {/*
                    <button
                      id={`provider-${i}-btn`}
                      onClick={() =>
                        this.addSelectedProvider(provider)
                      }
                    >
                  */}
                  <ServiceProviderListItem
                    provider={provider}
                    isSelected={
                      providerIsAlreadySelected(provider.id, selectedProviderIds)
                    }
                  />
                  {/* </button> */}
                </li>
              ))
            }
          </ul>
        </BaseCardBody>
      </BaseCard>
    );
  }
}

ServiceProvidersList.propTypes = {
  addToSelectedProviders: PropTypes.func.isRequired,
  providers: PropTypes.array,
  header: PropTypes.string.isRequired,
};

ServiceProvidersList.defaultProps = {
  providers: [],
};


export default ServiceProvidersList;
