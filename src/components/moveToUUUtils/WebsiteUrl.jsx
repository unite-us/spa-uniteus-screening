import PropTypes from 'prop-types';
import React from 'react';
import { get, isEmpty } from 'lodash';
import {
  Icon,
} from '@unite-us/ui';

const WebsiteUrl = ({ provider, noLink, iconStyle }) => {
  if (isEmpty(get(provider, 'website_url'))) {
    return null;
  }

  if (noLink) {
    return (
      <div className="website-url">
        <Icon icon="IconGlobe" style={iconStyle} />
        <span>{provider.website_url}</span>
      </div>
    );
  }
  return (
    <div className="website-url">
      <Icon icon="IconGlobe" />
      <a
        id={`${provider.id}-website-link`}
        href={provider.website_url}
        title="Organization Website"
        target="_blank"
      >
        {provider.website_url}
      </a>
    </div>
  );
};

WebsiteUrl.propTypes = {
  provider: PropTypes.object,
  iconStyle: PropTypes.object,
  noLink: PropTypes.bool,
};

WebsiteUrl.defaultProps = {
  noLink: false,
  iconStyle: {
    svg: {
      height: '12px',
      width: '12px',
    },
  },
  provider: {},
};

export default WebsiteUrl;
