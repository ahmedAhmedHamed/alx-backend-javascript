export interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: number]: any,
    [key: string]: any,
}

export interface Directors extends Teacher {
    numberOfReports: number
}

interface printTeacherFunction {
    (firstName: string, lastName:string): string;
}

export const printTeacher = (firstName: string, lastName:string) => `${firstName[0]}.${lastName}`;

interface studentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

interface studentConstructorInterface {
    new (firstName: string, lastName: string): studentClassInterface;
}

const StudentClass: studentConstructorInterface = class implements studentClassInterface {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomework() {return 'Currently working'} ;

    displayName() {return this.firstName};

}
