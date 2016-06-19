import './styles/main.scss';
import { draw as vega } from './vis/index';
import { addPrices } from './data';

vega('#hist', [{ rank: 1, airport: 'SEA' }]);

// import { finalhackers as logic } from './logic';
const rawdata = require('../data/sample.csv');

console.log(addPrices(rawdata));
