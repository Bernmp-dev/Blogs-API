const express = require('express');
const { userController } = require('./controllers');
const { jwt, loginValidate } = require('./middlewares');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

app.post('/login', loginValidate, jwt.createToken, userController.login);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
