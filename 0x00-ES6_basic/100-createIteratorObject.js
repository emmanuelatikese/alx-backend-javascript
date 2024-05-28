export default function createIteratorObject(report) {
  const newList = [];
  Object.values(report.allEmployees).map((x) => x.map((y) => newList.push(y)));
  return newList;
}
