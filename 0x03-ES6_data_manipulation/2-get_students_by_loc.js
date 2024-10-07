export default function getStudentsByLocation(students, cityName) {
  return students.filter((student) => student.location === cityName);
}
