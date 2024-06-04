export default function getListStudentIds(y) {
  return Array.isArray(y) === false ? [] : y.map((x) => x.id);
}
