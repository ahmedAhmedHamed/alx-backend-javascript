export default function cleanSet(set, startString) {
  let ret = '';
  if (startString === '') { return ret; }
  set.forEach((item) => {
    if (item.startsWith(startString)) { ret = `${ret}${item.slice(startString.length)}-`; }
  });
  return ret.slice(0, ret.length - 1);
}
