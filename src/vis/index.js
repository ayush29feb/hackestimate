import embed from 'vega-embed';
import { spec as histSpec } from './hist';

export function draw(div, data) {
  const histEmbedSpec = {
    mode: 'vega-lite',
    spec: histSpec(data),
  };
  embed(div, histEmbedSpec);
}
