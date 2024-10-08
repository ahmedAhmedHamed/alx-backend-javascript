export default function cleanSet(set, startString) {
  let ret = '';
  if (startString === '' || !set || !startString || !(set instanceof Set) || typeof startString !== 'string') { return ret; }
  set.forEach((item) => {
    if (typeof item === 'string' && item.startsWith(startString)) {
      const appended = item.length > startString.length ? `${item.substring(startString.length)}-` : '';
      ret = `${ret}${appended}`;
    }
  });
  return ret.slice(0, ret.length - 1);
}
