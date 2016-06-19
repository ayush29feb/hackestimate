export function scaleFeature(val, min, max) {
  return (val - min / (max - min));
}
