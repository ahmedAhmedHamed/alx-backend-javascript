const http = require('http');
const fs = require('fs');

const path = process.argv[2] || '';

function countStudents(file) {
  return new Promise((resolve) => {
    if (!fs.existsSync(path)) {
      throw new Error('Cannot load the database');
    }
    if (!fs.statSync(path).isFile()) {
      throw new Error('Cannot load the database');
    }
    fs.readFile(path, 'utf-8', (err, data) => {
      const lines = data.trim().split('\n');
      const studentDistribution = {};
      const fieldNames = lines[0].split(',');
      const studentPropertyNames = fieldNames.slice(0, fieldNames.length - 1);

      for (const line of lines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];
        if (!Object.keys(studentDistribution).includes(field)) {
          studentDistribution[field] = [];
        }
        const studentEntries = studentPropertyNames
          .map((propName, idx) => [propName, studentPropValues[idx]]);
        studentDistribution[field].push(Object.fromEntries(studentEntries));
      }

      const totalStudents = Object
        .values(studentDistribution)
        .reduce((pre, cur) => (pre || []).length + cur.length);

      file.write(`Number of students: ${totalStudents}\n`);

      for (const [field, specialization] of Object.entries(studentDistribution)) {
        const studentNames = specialization.map((student) => student.firstname).join(', ');
        file.write(`Number of students in ${field}: ${specialization.length}. List: ${studentNames}\n`);
      }
      resolve();
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url.endsWith('students')) {
    countStudents(res).then(() => res.end());
  } else {
    res.write('Hello Holberton School!');
    res.end();
  }
});
app.listen(1245);

module.exports = app;
