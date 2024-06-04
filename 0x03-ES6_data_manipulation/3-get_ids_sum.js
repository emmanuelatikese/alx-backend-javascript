export default function getStudentIdsSum(list) {
  return (list.map((x) => x.id)).reduce((x, y) => x + y);
}
