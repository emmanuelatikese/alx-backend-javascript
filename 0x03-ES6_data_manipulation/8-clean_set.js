const cleanSet = (set, startString) => {
  const newArr = [];
  set.forEach((x) => newArr.push(x));
  return startString !== ''
    ? newArr.filter((x) => x.startsWith(startString)).map((y) => y.slice(startString.length)).join('-')
    : '';
};
export default cleanSet;
