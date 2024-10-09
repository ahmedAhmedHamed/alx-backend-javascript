interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }

    workFromHome(): string {
        return 'Working from home';
    }

}

class Teacher implements TeacherInterface {
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workFromHome(): string {
        return 'Cannot work from home';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }

}

export function createEmployee(salary: string | number) : Teacher | Director {
    if (typeof(salary) === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

export function isDirector(employee: Director | Teacher) : employee is Director {
    return employee instanceof Director;
}

export function executeWork(employee: Director | Teacher) : string {
    if (isDirector(employee)) { return employee.workDirectorTasks(); }
    else { return employee.workTeacherTasks(); }
}

type Subjects = "Math" | "History"

export function teachClass(todayClass: Subjects) {
    return todayClass === "Math" ? "Teaching Math" : "Teaching History";
}

