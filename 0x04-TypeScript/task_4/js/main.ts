export const Java = new Subjects.Java();
export const React = new Subjects.React();
export const Cpp = new Subjects.Cpp();

const cTeacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10
}

Cpp.setTeacher(cTeacher);
console.log(Cpp.getRequirements());
console.log(Cpp.getAvailableTeacher());

React.setTeacher(cTeacher);
console.log(React.getRequirements());
console.log(React.getAvailableTeacher());
