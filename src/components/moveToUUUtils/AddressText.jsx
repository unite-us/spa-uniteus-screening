import PropTypes from 'prop-types';
import React from 'react';
import { isEmpty } from 'lodash';
import {
  Icon,
} from '@unite-us/ui';
import {
  getAddressString,
} from './index';

const AddressText = ({ address, iconStyle }) => {
  if (isEmpty(address)) {
    return null;
  }

  return (
    <div className="address-text">
      <Icon icon="IconMapMarker" style={iconStyle} />
      {getAddressString(address)}
    </div>
  );
};

AddressText.propTypes = {
  address: PropTypes.object,
  iconStyle: PropTypes.object,
};

AddressText.defaultProps = {
  iconStyle: {
    svg: {
      height: '12px',
      width: '12px',
    },
  },
  address: null,
};

export default AddressText;
