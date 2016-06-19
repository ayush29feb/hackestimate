import embed from 'vega-embed';
import { spec as histSpec, spec2 as histSpec2 } from './hist';
import { spec as bubbleSpec } from './bubble';

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

export function draw3(div, data) {
  const histEmbedSpec = {
    mode: 'vega-lite',
    spec: bubbleSpec(data),
  };
  embed(div, histEmbedSpec);
}

