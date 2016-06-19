import './styles/main.scss';
import { draw as vega } from './vis/index';
import { addPrices } from './data';
import { finalhackers as logic } from './logic';

const BUDGET = 10000;
const TOTAL = 600;
const rawdata = require('../data/sample.csv');
const processedData = addPrices(rawdata);
const hackers = logic(processedData, BUDGET, TOTAL);

console.log('processed', processedData);
console.log('final', hackers);

vega('#hist', hackers);
