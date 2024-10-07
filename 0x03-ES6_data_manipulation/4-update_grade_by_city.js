export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const ret = student;
      const newGrade = newGrades.find((grade) => grade.studentId === student.id);
      ret.grade = newGrade ? newGrade.grade : 'N/A';
      return student;
    });
}
