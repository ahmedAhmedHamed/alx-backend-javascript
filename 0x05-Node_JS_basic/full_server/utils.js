const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(path)) {
      reject(new Error('Cannot load the database'));
    }
    if (!fs.statSync(path).isFile()) {
      reject(new Error('Cannot load the database'));
    }
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
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

      for (const key of Object.keys(studentDistribution)) {
        for (let i = 0; i < studentDistribution[key].length; i += 1) {
          studentDistribution[key][i] = studentDistribution[key][i].firstname;
        }
      }
      resolve(studentDistribution);
    });
  });
}
export default readDatabase;
module.exports = readDatabase;
