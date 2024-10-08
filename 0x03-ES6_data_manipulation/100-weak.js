export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const newCount = weakMap.get(endpoint) ? weakMap.get(endpoint) + 1 : 1;
  weakMap.set(endpoint, newCount);
  if (newCount >= 5) { throw new Error('Endpoint load is high'); }
}
