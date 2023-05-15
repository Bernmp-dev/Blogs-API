const express = require('express');
const { userController } = require('./controllers');
const { jwt, loginValidate, emailValidate } = require('./middlewares');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

app.post('/login', loginValidate, jwt.createToken, userController.login);

app.post('/user', emailValidate, jwt.createToken, userController.createUser);

app.get('/user', jwt.authToken, userController.listUsers);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
