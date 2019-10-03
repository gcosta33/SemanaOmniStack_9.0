const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();

// rest GET, POST, PUT, DELETE

//express usar json

// req.body = Acessar corpo da requisição(para criação, edição)
// req.query = Acessar query params(para filtros)
// req.params = Acessar route params(para edição,delete)

mongoose.connect('mongodb+srv://gcostaOmni:gcostaOmni@omnistack-jeayd.mongodb.net/semana09?retryWrites=true&w=majority',{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
app.use(express.json());
app.use(routes);
app.listen(3333);

