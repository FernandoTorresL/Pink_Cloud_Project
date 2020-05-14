const express = require('express');

const app = express();

const { config } = require('./config/index');

app.get('/', function(req, res) {
    res.send('hello world');
});

app.get('/json', function(req, res) {
  res.json({ hello: 'world' });
});

app.get('/anyo-bisiesto-checker', function (req, res) {
  const {anyo} = req.query;
  const anyoBisiesto = (anyo % 4 === 0 && anyo % 100 !== 0) || anyo % 400 === 0;
  res.send(`El año ${anyo} ${anyoBisiesto ? 'es bisiesto' : 'no es bisiesto'}.`);
});

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
