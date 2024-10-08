export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) { throw new Error('Cannot Process'); }
  map.forEach((value, key) => {
    if (typeof (value) !== 'number') { throw new Error('Cannot Process'); }
    if (value === 1) { map.set(key, 100); }
  });
  return map;
}
