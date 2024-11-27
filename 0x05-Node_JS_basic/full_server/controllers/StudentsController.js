import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const path = process.argv[2];
    readDatabase(path).then((data) => {
      response.status(200);
      const sent = ['This is the list of our students'];
      for (const key of Object.keys(data)) {
        sent.push(`Number of students in ${key}: ${data[key].length}. `
            + `List: ${data[key].join(', ')}`);
      }
      response.send(sent.join('\n'));
    }).catch((err) => {
      response.status(500);
      const message = err instanceof Error ? err.message : err.toString();
      response.send(message);
    });
  }

  static getAllStudentsByMajor(request, response) {
    const queriedField = request.params.major;
    console.log(queriedField);
    if (!(['SWE', 'CS'].includes(queriedField))) {
      response.status(500);
      response.send('Major parameter must be CS or SWE');
      return;
    }
    const path = process.argv[2];
    readDatabase(path).then((data) => {
      response.status(200);
      const sent = [];
      for (const key of Object.keys(data)) {
        if (key === queriedField) { sent.push(`List: ${data[key].join(', ')}`); }
      }
      response.send(sent.join('\n'));
    }).catch((err) => {
      response.status(500);
      const message = err instanceof Error ? err.message : err.toString();
      response.send(message);
    });
  }
}

export default StudentsController;
module.exports = StudentsController;
