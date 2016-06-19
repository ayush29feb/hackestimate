import _ from 'lodash';
import { duplicate } from './util';
import { priceFromAirport } from './prices';

export function addPrices(data) {
  const res = [];
  _.forEach(data, (a) => {
    const single = duplicate(a);
    single.price = priceFromAirport(single.airport);
    res.push(single);
  });
  return res;
}

export function calcCost(data) {
  let ret = 0;
  _.forEach(data, (o) => {
    ret += o.price;
  });
  return ret;
}
