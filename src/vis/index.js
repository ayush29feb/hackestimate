import embed from 'vega-embed';
import { spec as histSpec, spec2 as histSpec2 } from './hist';

export function draw1(div, data) {
  const histEmbedSpec = {
    mode: 'vega-lite',
    spec: histSpec(data),
  };
  embed(div, histEmbedSpec);
}

export function draw2(div, data) {
  const histEmbedSpec = {
    mode: 'vega-lite',
    spec: histSpec2(data),
  };
  embed(div, histEmbedSpec);
}
