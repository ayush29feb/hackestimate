export function spec(data) {
  return {
    data: { values: data },
    mark: 'bar',
    encoding: {
      x: { field: 'airport', type: 'ordinal' },
      y: { aggregate: 'count', field: '*', type: 'quantitative' },
    },
  };
}

export function spec2(data) {
  return {
    data: { values: data },
    mark: 'bar',
    encoding: {
      x: { field: 'price', type: 'quantitative', bin: true },
      y: { aggregate: 'count', field: '*', type: 'quantitative' },
    },
  };
}
