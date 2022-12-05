import PropTypes from 'prop-types';
import React from 'react';
import { isEmpty } from 'lodash';
import HoursOfOperationDay from './HoursOfOperationDay';

const HoursOfOperationWeek = ({ hours, week }) => {
  const days = week.map(day => (
    <HoursOfOperationDay key={day} day={day} hours={hours} />
  ));

  return (
    <div className="hours-of-operation-week">
      {!isEmpty(hours) && days}
    </div>
  );
};

HoursOfOperationWeek.propTypes = {
  hours: PropTypes.array,
  week: PropTypes.array,
};

HoursOfOperationWeek.defaultProps = {
  hours: [],
  week: [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ],
};

export default HoursOfOperationWeek;
