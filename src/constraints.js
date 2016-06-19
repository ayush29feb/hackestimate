/* The purose of this file is to describe a constraint
** using the user application meta data. It will act as a
** stack of constraints. You can push and pop constraints.
*/
import _ from 'lodash';
import { PROCESSED_META_DATA as PMD } from './metadata';
// import { duplicate } from './util';

export const CONSTRAINT = {
  ID: 'id',
  ENTITY: 'entity',
  ATTRIBUTE: 'attribute',
  LIMIT: 'limit',
};

export const ENTITIES = {
  GENDER: 'gender',
  AIRPORT: 'airport',
};

// A constraint object looks like the following
// {entity: 'gender', attribute: 'male', limit: 400}
export function filterOn(applications, constraint) {
  const unaccepted = _.filter(applications, (o) => (o[PMD.STATUS] === 0));
  const ret = _.filter(unaccepted, (o) =>
    (o[constraint[CONSTRAINT.ENTITY]] !== constraint[CONSTRAINT.ATTRIBUTE]));
  return ret;
}

// export function reject(applications, constraints) {
//   const sortedConstraints = _.sortBy(constraints, (o) => (o[CONSTRAINT.ID]));
//   const retApp = 
//   _.forEach(sortedConstraints, (c) => {
//     _.forEach(applications, (single) => {
//     });
//   });
// }
