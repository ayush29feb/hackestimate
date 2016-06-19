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

// Returns the distance between 2 points a, b of n dimensions
export function distance(a, b) {
  if (a.length !== b.length) {
    return undefined;
  }
  const n = a.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    // sum += (a[i] - b[i])^2
    sum = _.add(sum, _.multiply(_.subtract(a[i], b[i]), 2));
  }
  return sum;
}
