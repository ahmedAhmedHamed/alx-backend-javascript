export default function iterateThroughObject(reportWithIterator) {
  let ret = '';
  ret += reportWithIterator.next().value;
  for (const name of reportWithIterator) {
    ret += ` | ${name}`;
  }
  return ret;
}
