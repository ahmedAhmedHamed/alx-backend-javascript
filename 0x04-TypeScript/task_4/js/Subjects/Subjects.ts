/// <reference path="Teacher.ts" />

namespace Subjects {
    class Subject {
        teacher: Teacher;

        setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
}
