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
