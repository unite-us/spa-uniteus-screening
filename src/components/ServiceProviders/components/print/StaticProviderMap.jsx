import PropTypes from 'prop-types';
import React from 'react';
import { get, isEmpty } from 'lodash';
import {
  getAddressString,
} from 'moveToUUUtils';

const GOOGLE_STATIC_URL = 'https://maps.googleapis.com/maps/api/staticmap';
const ZOOM_AND_MAP_SIZE = '&zoom=15&size=300x186';
const getAddressText = group => getAddressString(get(group, 'addresses[0]', {}));

const StaticProviderMap = ({ provider, googleMapsApiKey }) => {
  const KEY = `&key=${googleMapsApiKey}`;

  if (isEmpty(get(provider, 'addresses', []))) {
    return null;
  }
  const address = encodeURIComponent(getAddressText(provider));
  const marker = `&markers=%7C${address}%7C&`;

  return (
    <div className="static-provider-map">
      <img
        src={`${GOOGLE_STATIC_URL}?${marker}${ZOOM_AND_MAP_SIZE}${KEY}`}
        alt="provider static map"
      />
    </div>
  );
};

StaticProviderMap.propTypes = {
  googleMapsApiKey: PropTypes.string.isRequired,
  provider: PropTypes.object.isRequired,
};

export default StaticProviderMap;
