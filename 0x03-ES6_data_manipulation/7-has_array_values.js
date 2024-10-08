export default function hasValuesFromArray(set, array) {
  return array.reduce((acc, curr) => set.has(curr), true);
}
