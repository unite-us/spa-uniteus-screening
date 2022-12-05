const NOON = 720;
const FAUX_MIDNIGHT = 1439;

function getRelativeTime(time) {
  if (time === FAUX_MIDNIGHT) {
    return 0;
  }
  return time < NOON ? time : time - NOON;
}

function formatTimeOfDay(time = 0) {
  const relativeTime = getRelativeTime(time);
  const hour = Math.floor(relativeTime / 60);
  const minute = relativeTime - (hour * 60);

  const displayHour = hour === 0 ? '12' : hour;
  const displayMinute = minute < 10 ? `0${minute}` : minute;
  const label = time < NOON || time === FAUX_MIDNIGHT ? 'AM' : 'PM';

  return `${displayHour}:${displayMinute} ${label}`;
}

export default formatTimeOfDay;
