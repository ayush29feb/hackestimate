import './styles/main.scss';
import { finalhackers as logic } from './logic';

const mockapps = [
  {
    rank: 1,
    name: 'Ayush',
    airport: 'SEA',
    price: 0,
  }, {
    rank: 2,
    name: 'Cedric',
    airport: 'LAX',
    price: 300,
  }, {
    rank: 3,
    name: 'Aishu',
    airport: 'SFO',
    price: 400,
  }, {
    rank: 4,
    name: 'Aishu',
    airport: 'SFO',
    price: 250,
  }, {
    rank: 5,
    name: 'Aishu',
    airport: 'SFO',
    price: 100,
  }, {
    rank: 6,
    name: 'Aishu',
    airport: 'SEA',
    price: 0,
  }, {
    rank: 7,
    name: 'Aishu',
    airport: 'SFO',
    price: 400,
  }, {
    rank: 8,
    name: 'Aishu',
    airport: 'SFO',
    price: 80,
  },
];

console.log(logic(mockapps, 500, 8));
