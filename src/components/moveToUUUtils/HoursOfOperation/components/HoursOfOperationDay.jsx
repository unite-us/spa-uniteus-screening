import PropTypes from 'prop-types';
import React from 'react';
import { find, isEmpty, map, orderBy } from 'lodash';
import { formatDuration } from '../utils';

const Closed = () => (
  <div className="hours-of-operation-day__closed">
    Closed
  </div>
);

const HoursOfOperationDay = ({ day, hours }) => {
  const { hours_of_operation } = find(hours, { day_of_week: day }) || {};
  const hoursDisplay = map(orderBy(hours_of_operation, 'opens_at'), formatDuration).join(', ');

  return (
    <div className="hours-of-operation-day">
      <div className="hours-of-operation-day__day-label">
        {day}
      </div>
      <div className="hours-of-operation-day__hours">
        {
          isEmpty(hours_of_operation) ?
            <Closed /> :
            hoursDisplay
        }
      </div>
    </div>
  );
};

HoursOfOperationDay.propTypes = {
  day: PropTypes.string.isRequired,
  hours: PropTypes.array.isRequired,
};

export default HoursOfOperationDay;
