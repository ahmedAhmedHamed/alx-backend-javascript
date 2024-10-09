namespace Subjects {
    export class React extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for React';
        }

        getAvailableTeacher() {
            return this.teacher.experienceTeachingReact > 0
                ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
        }
    }
    export interface Teacher {
        experienceTeachingReact?: number;
    }
}