import './styles/main.scss';
import { addPrices } from './data';
// import { finalhackers as logic } from './logic';

const rawdata = require('../data/sample.csv');

console.log(addPrices(rawdata));
