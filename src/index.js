import './styles/main.scss';
import { finalhackers as logic } from './logic';

const mockapps = [
  {
    rank: 1,
    name: 'Ayush',
    airport: 'SEA',
  }, {
    rank: 2,
    name: 'Cedric',
    airport: 'LAX',
  }, {
    rank: 3,
    name: 'Aishu',
    airport: 'SFO',
  },
];

console.log(logic(mockapps, 10000, 600));
