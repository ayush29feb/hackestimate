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
