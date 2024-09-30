export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  for (let value of array) {
    value = appendString + value;
    array[idx] = value;
    idx += 1;
  }

  return array;
}
