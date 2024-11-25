const http = require('http');

const app = http.createServer((req, res) => {
  if (req.url.endswith('students')) {
    res.write('This is the list of our students\n');

  }
  res.write('Hello Holberton School!');
  res.end();
});
app.listen(1245);

module.exports = app;
