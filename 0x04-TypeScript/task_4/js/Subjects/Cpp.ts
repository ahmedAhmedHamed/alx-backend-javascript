namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }

    class Cpp extends Subject {
        gerRequirements(): string {
            return 'Here is the list of requirements for Cpp';
        }

        getAvailableTeacher(): string {
            return this.teacher.experienceTeachingC
                ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
        }
    }
}
