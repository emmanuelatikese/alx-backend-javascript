export default function cleanSet(set, startString) {
  const newArr = [];
  set.forEach((x) => newArr.push(x));
  return newArr.some((x) => x.startsWith(startString)) && startString !== ''
    ? newArr.filter((x) => x.startsWith(startString)).map((y) => y.slice(startString.length)).join('-')
    : '';
}
