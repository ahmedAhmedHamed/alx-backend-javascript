export default function* createIteratorObject(report) {
  for (const key in report.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, key)) {
      for (const name of report.allEmployees[key]) {
        yield name;
      }
    }
  }
}
