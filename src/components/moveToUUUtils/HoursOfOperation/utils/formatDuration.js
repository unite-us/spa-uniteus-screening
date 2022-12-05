import { formatTimeOfDay } from '../utils';

function formatDuration(duration = {}) {
  const { opens_at, closes_at } = duration;
  return `${formatTimeOfDay(opens_at)} - ${formatTimeOfDay(closes_at)}`;
}

export default formatDuration;
