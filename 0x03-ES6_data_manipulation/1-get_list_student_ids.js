export default function getListStudentIds(studentIds) {
  if (!Array.isArray(studentIds)) { return []; }
  return studentIds.map((studentObject) => studentObject.id);
}
