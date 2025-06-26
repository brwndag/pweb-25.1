const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    const frase = response.data[0];
    res.render('index', { frase });
  } catch (error) {
    res.render('index', { frase: "Não foi possível carregar a frase:///" });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});