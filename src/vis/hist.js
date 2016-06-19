export function spec(data) {
  return {
    data: { values: data },
    mark: 'bar',
    encoding: {
      x: { field: 'airport', type: 'ordinal' },
      y: { aggregate: 'count', field: '*', type: 'qunatitative' },
    },
  };
}
