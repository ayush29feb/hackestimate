import './styles/main.scss';
import { draw as vega } from './vis/index';

vega('#hist', [{ rank: 1, airport: 'SEA' }]);
