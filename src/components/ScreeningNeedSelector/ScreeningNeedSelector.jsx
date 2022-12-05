import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  BaseCard,
  BaseCardBody,
  BaseCardHeader,
  Button,
  CheckBoxField,
} from '@unite-us/ui';

// Q. Do we need to handle "high risk" needs in the UI?
function ScreeningNeedSelector({
  initiallyChecked, isHighRisk, needs, onSubmit,
}) {
  const [needChecks, setNeedChecks] = useState(needs.map((need = {}) => ({
    id: need.service_type && need.service_type.id,
    name: need.service_type && need.service_type.name,
    value: initiallyChecked,
  })));

  const onChange = id =>
    () => {
      const index = needChecks.findIndex(needCheck => needCheck.id === id);
      // Set the new needs by replacing element at index.
      setNeedChecks([
        ...needChecks.slice(0, index),
        { ...needChecks[index], value: !needChecks[index].value },
        ...needChecks.slice(index + 1),
      ]);
    };

  const handleSubmit = () => {
    const checkedNeeds = needChecks.filter(({ value }) => Boolean(value));
    const originalCheckedNeeds = needs.filter(need => checkedNeeds.some(({ id }) => need.service_type.id === id));
    onSubmit(originalCheckedNeeds);
  };

  return (
    <BaseCard className="screening-need-selector">
      <BaseCardHeader title="Suggested Referrals" />
      <BaseCardBody className="screening-need-selector__body">
        <p>
          This client has been determined {isHighRisk && <span data-testid="high-risk-fragment">to be <strong>high risk</strong> and</span>} to have the following needs. Selected
          service types will be added to a referral:
        </p>

        <div style={{ marginTop: '1rem' }} />
        <form>
          {needChecks.map(({ name, id, value }) => (
            <CheckBoxField
              key={id}
              id={id}
              label={name}
              onChange={onChange(id)}
              value={value}
            />
          ))}

          <div style={{ marginTop: '1rem' }} />

          <Button
            disabled={needChecks.filter(({ value }) => Boolean(value)).length === 0}
            fullWidth
            id="screening-need-selector-submit-button"
            label="Create Referrals"
            onClick={handleSubmit}
            primary
          />
        </form>
      </BaseCardBody>
    </BaseCard>
  );
}

ScreeningNeedSelector.propTypes = {
  initiallyChecked: PropTypes.bool,
  needs: PropTypes.array,
  onSubmit: PropTypes.func,
  isHighRisk: PropTypes.bool,
};

ScreeningNeedSelector.defaultProps = {
  initiallyChecked: false,
  needs: [],
  onSubmit: () => {},
  isHighRisk: false,
};

export default ScreeningNeedSelector;
