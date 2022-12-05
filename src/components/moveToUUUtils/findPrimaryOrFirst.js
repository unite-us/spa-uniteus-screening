import { find } from 'lodash';

function findPrimaryOrFirst(array) {
  return find(array, { is_primary: true }) || array[0] || {};
}

export default findPrimaryOrFirst;
