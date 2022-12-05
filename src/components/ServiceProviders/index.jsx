import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, get } from 'lodash';
import {
  ServiceProvidersList,
} from './components';

// (todo) revisit once data structure is set for how providers are going to be passed in
const createProviderLists = (needs, addToSelectedProviders) =>
  needs.map(need => (
    <ServiceProvidersList
      key={get(need, 'service_type.name', '')}
      providers={get(need, 'groups', [])}
      addToSelectedProviders={addToSelectedProviders}
      header={get(need, 'service_type.name', '')}
    />
  ));


class ServiceProviders extends Component {
  constructor(props) {
    super(props);

    this.addToSelectedProviders = this.addToSelectedProviders.bind(this);

    this.state = {
      selectedProviders: [],
    };
  }

  addToSelectedProviders(key, providerIds) {
    this.setState({
      selectedProviders: [
        ...this.state.selectedProviders.filter(item => item.key !== key),
        ...(isEmpty(providerIds) ? [] : [{ key, providerIds }]),
      ],
    }, () => {
      this.props.getSelectedProviders(this.state.selectedProviders);
    });
  }

  render() {
    const { needs } = this.props;
    if (isEmpty(needs)) {
      return null;
    }

    const providerLists = createProviderLists(needs, this.addToSelectedProviders);

    return (
      <div className="service-providers">
        {providerLists}
      </div>
    );
  }
}

ServiceProviders.propTypes = {
  getSelectedProviders: PropTypes.func,
  needs: PropTypes.array,
};

ServiceProviders.defaultProps = {
  getSelectedProviders: () => {},
  needs: [],
};

export default ServiceProviders;
