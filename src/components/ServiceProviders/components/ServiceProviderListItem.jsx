import PropTypes from 'prop-types';
import React from 'react';
import { get } from 'lodash';
import classNames from 'classnames';
import {
  Avatar,
} from '@unite-us/ui';
import {
  AddressText,
  findPrimaryOrFirst,
  HoursOfOperationWeek,
  PhoneNumberDisplay,
  WebsiteUrl,
} from '../../moveToUUUtils';

const ServiceProviderListItem = ({ provider, isSelected }) => {
  const itemClass = () => classNames({
    'service-provider-list-item': true,
    selected: isSelected,
  });

  return (
    <div className={itemClass()}>
      <div className="service-provider-list-item__avatar">
        <Avatar
          image={get(provider, 'logo_url')}
          size="sm"
          alt={`${provider.name} avatar`}
          fallbackIcon="IconElectronsArrow"
        />
      </div>
      <div className="service-provider-list-item__body">
        <h3>{provider.name}</h3>
        <AddressText address={get(provider, 'addresses[0]')} />
        <PhoneNumberDisplay
          item={findPrimaryOrFirst(get(provider, 'phone_numbers', []))}
          hidePrimaryDisplay
          shortDisplay
          noLink
        />
        <WebsiteUrl provider={provider} noLink />
        <HoursOfOperationWeek hours={provider.hours_of_operation} />
      </div>
    </div>
  );
};


ServiceProviderListItem.propTypes = {
  provider: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  isSelected: PropTypes.bool,
};

ServiceProviderListItem.defaultProps = {
  isSelected: false,
};

export default ServiceProviderListItem;
