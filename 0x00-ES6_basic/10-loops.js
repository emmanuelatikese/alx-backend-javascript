export default function appendToEachArrayValue(array, appendString) {
  const newList = [];
  for (let idx of array) {
    idx = appendString + idx;
    newList.push(idx);
  }
  return newList;
}
