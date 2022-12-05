import PropTypes from 'prop-types';
import React from 'react';
import { compact, find, isEmpty } from 'lodash';
import PrintProvider from './PrintProvider';

const PrintServiceProvidersList = ({
  needs,
  selectedProviders,
  client,
  googleMapsApiKey,
}) => {
  const providerPages = selectedProviders.map((item = {}) => {
    // find the current need { service_type: {}, providers: [] } off of item.key
    const currentNeed = find(needs, { service_type: { name: item.key } }) || {};

    // return if no need is found using the item.key
    if (isEmpty(currentNeed)) {
      return null;
    }
    // grab the providers off of the need
    const { providers } = currentNeed;

    // find the providers from the need by the selected item providers ids
    const currentSelectedItemProviders = compact(item.providers.map(id => find(providers, { id })));

    return (
      <div key={item.key} className="page">
        <h2>{item.key} Providers</h2>
        <div className="print-service-providers-list__providers">
          {
            currentSelectedItemProviders.map(provider => (
              <PrintProvider
                key={provider.id}
                provider={provider}
                googleMapsApiKey={googleMapsApiKey}
              />
            ))
          }
        </div>
      </div>
    );
  });

  if (isEmpty(providerPages)) {
    return null;
  }

  return (
    <div className="print-service-providers-list">
      <section className="client">
        <div className="client__name">
          <h2>{client.full_name}</h2>
        </div>
      </section>
      <section className="providers">
        {providerPages}
      </section>
    </div>
  );
};

PrintServiceProvidersList.propTypes = {
  googleMapsApiKey: PropTypes.string.isRequired,
  needs: PropTypes.array,
  selectedProviders: PropTypes.array,
  client: PropTypes.object,
};

PrintServiceProvidersList.defaultProps = {
  client: {
    full_name: 'New Client',
  },
  needs: [],
  selectedProviders: [],
};

export default PrintServiceProvidersList;
