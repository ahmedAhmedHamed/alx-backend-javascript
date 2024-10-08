export default function cleanSet(set, startString) {
  let ret = '';
  if (startString === '') { return ret; }
  set.forEach((item) => {
    if (item.startsWith(startString)) {
      const appended = item.length > startString.length ? `${item.slice(startString.length)}-` : '';
      ret = `${ret}${appended}`;
    }
  });
  return ret.slice(0, ret.length - 1);
}
