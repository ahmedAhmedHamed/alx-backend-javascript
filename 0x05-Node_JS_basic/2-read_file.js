const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    let numberOfStudents = 0;
    const studentDistribution = {
      CS: [0, []],
      SWE: [0, []],
    };
    const lines = data.split('\n');
    delete lines[0];
    lines.forEach((line) => {
      const fields = line.split(',');
      if (fields.length === 4) {
        numberOfStudents += 1;
        studentDistribution[fields[3]][0] += 1;
        studentDistribution[fields[3]][1].push(fields[0]);
      }
    });
    console.log(`Number of students: ${numberOfStudents}`);
    for (const [key, value] of Object.entries(studentDistribution)) {
      process.stdout.write(`Number of students in ${key}: ${value[0]}. List: `);
      for (let i = 0; i < value[0]; i += 1) {
        process.stdout.write(`${value[1][i]}`);
        if (i !== value[0] - 1) {
          process.stdout.write(', ');
        } else {
          process.stdout.write('\n');
        }
      }
    }
  } catch (e) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
