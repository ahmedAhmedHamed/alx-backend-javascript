namespace Subjects {
    export class Java extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }

        getAvailableTeacher() {
            return this.teacher.experienceTeachingJava > 0
                ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
        }
    }
    export interface Teacher {
        experienceTeachingJava?: number;
    }
}