import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { get, isEmpty } from 'lodash';
import {
  Icon,
} from '@unite-us/ui';
import {
  formatPhoneNumber,
  getTelLink,
} from './utils';

class PhoneNumberDisplay extends Component {
  formattedPhoneLink(phoneNumber) {
    const { primaryDisplayInline, typeDisplayInline, iconStyle } = this.props;
    if (isEmpty(phoneNumber)) {
      return null;
    }

    const phoneNumberWithNoAreaCode = phoneNumber.phone_number.length === 7;
    const primaryDisplay = (phoneNumber.is_primary && !this.props.hidePrimaryDisplay) ? '(primary)' : null;
    const typeDisplay = (
      <span>
        {phoneNumber.phone_type} {primaryDisplay}
      </span>
    );
    const formattedPhoneNumber = formatPhoneNumber(get(phoneNumber, 'phone_number'));

    const doNotDisplayLink = this.props.noLink || phoneNumberWithNoAreaCode;

    if (doNotDisplayLink) {
      return (
        <div className="phone-number-display" style={{ marginTop: '3px' }}>
          <span><Icon icon="IconPhone" style={iconStyle} /></span>
          <span>{formattedPhoneNumber}</span>
          {
            (typeDisplay && typeDisplayInline) ?
              <span className="subhead"> {typeDisplay}</span> : null
          }
          {
            (primaryDisplay && primaryDisplayInline && !typeDisplayInline) ?
              <span className="subhead"> {primaryDisplay}</span> : null
          }
        </div>
      );
    }

    return (
      <div className="phone-number-display">
        {this.props.shortDisplay ? null : <p className="subhead">{typeDisplay}</p>}
        <p>
          {
            <a href={getTelLink(phoneNumber)}>
              {formattedPhoneNumber}
            </a>
          }
        </p>
      </div>
    );
  }

  render() {
    const phoneNumber = this.props.item;
    if (isEmpty(phoneNumber)) { return null; }

    return this.formattedPhoneLink(phoneNumber);
  }
}

PhoneNumberDisplay.propTypes = {
  item: PropTypes.object,
  iconStyle: PropTypes.object,
  shortDisplay: PropTypes.bool,
  hidePrimaryDisplay: PropTypes.bool,
  noLink: PropTypes.bool,
  primaryDisplayInline: PropTypes.bool,
  typeDisplayInline: PropTypes.bool,
};

PhoneNumberDisplay.defaultProps = {
  iconStyle: {
    svg: {
      height: '12px',
      width: '12px',
    },
  },
  item: null,
  shortDisplay: false,
  hidePrimaryDisplay: false,
  noLink: false,
  primaryDisplayInline: false,
  typeDisplayInline: false,
};

export default PhoneNumberDisplay;
