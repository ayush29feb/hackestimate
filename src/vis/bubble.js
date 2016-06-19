export function spec(data) {
  return {
    data: { values: data },
    mark: 'point',
    encoding: {
      x: { field: 'rank', type: 'quantitative', bin: { maxbins: 10 } },
      y: { field: 'price', type: 'quantitative', bin: { maxbins: 10 } },
      size: { aggregate: 'count', field: '*', type: 'quantitative' },
    },
  };
}
