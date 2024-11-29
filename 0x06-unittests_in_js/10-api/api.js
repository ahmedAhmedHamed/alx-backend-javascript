const express = require('express');


const app = express();

const PORT = 7865;

app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

app.get('/cart/:id(\\d+)', (request, res) => {
  const id = request.params.id;
  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (_, res) => {
  res.send(`{
  payment_methods: {
    credit_cards: true,
    paypal: false
  }
}`);
});

app.post('/login', (req, res) => {
  let username = '';
  if (req.body) {
    username = req.body.userName;
  }
  res.send(`Welcome ${username}`);
});

module.exports = app;
