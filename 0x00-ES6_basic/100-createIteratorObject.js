export default function *createIteratorObject(report) {
  for (const key in report['allEmployees']) {
    for (const name of report['allEmployees'][key]) {
      yield name;
    }
  }
}
