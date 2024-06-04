import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(students, city, newGrade) {
  const newList = getStudentsByLocation(students, city);
  //   let newX = []
  newGrade.map((x) => {
    for (const i of newList) {
      if (x.studentId === i.id) {
        i.grade = x.grade;
      }
    }
    return x;
  });
  for (const i of newList) {
    if (i.grade === undefined) {
      i.grade = 'N/A';
    }
  }
  return newList;
}
