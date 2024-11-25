console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  let chunk;
  // Use a loop to make sure we read all available data.
  // eslint-disable-next-line no-cond-assign
  while ((chunk = process.stdin.read()) !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
