import PropTypes from 'prop-types';
import React from 'react';
import StaticProviderMap from './StaticProviderMap';
import {
  ServiceProviderListItem,
} from '../index';

const PrintProvider = ({ provider, googleMapsApiKey }) => (
  <div className="print-provider">
    <div className="print-provider__header">
      <h3>{provider.name}</h3>
    </div>
    <div className="print-provider__body">
      <ServiceProviderListItem provider={provider} />
      <StaticProviderMap
        googleMapsApiKey={googleMapsApiKey}
        provider={provider}
      />
    </div>
  </div>
);


PrintProvider.propTypes = {
  googleMapsApiKey: PropTypes.string.isRequired,
  provider: PropTypes.object,
};

PrintProvider.defaultProps = {
  provider: {},
};

export default PrintProvider;
