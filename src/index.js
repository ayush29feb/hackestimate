import './styles/main.scss';
import _ from 'lodash';
import { draw as vega } from './vis/index';
import { addPrices, calcCost } from './data';
import { finalhackers as logic } from './logic';

const BUDGET = 15000;
const TOTAL = 600;
const rawdata = require('../data/sample.csv');
const processedData = addPrices(rawdata);
const hackers = logic(processedData, BUDGET, TOTAL);

console.log('processed', processedData);
console.log('final', hackers);

vega('#hist1', hackers);
vega('#hist2', _.filter(processedData, (o) => (o.airport !== 'SEA')));
document.getElementById('total_cost').innerHTML = calcCost(hackers);
document.getElementById('total_hackers').innerHTML = hackers.length;

