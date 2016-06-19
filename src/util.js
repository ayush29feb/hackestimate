import _ from 'lodash';
export function scaleFeature(val, min, max) {
  return (val - min) / (max - min);
}

export function minMaxArray(arr, prop) {
  if (arr.lenght < 1) {
    return undefined;
  }
  let min = arr[0][prop];
  let max = arr[0][prop];
  _.forEach(arr, (a) => {
    min = _.min([min, a[prop]]);
    max = _.max([max, a[prop]]);
  });
  return { min, max };
}

export function duplicate(obj) {
  return JSON.parse(JSON.stringify(obj));
}

