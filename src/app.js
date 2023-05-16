const express = require('express');
const { userController, categoryController } = require('./controllers');
const { jwt, loginValidate, emailValidate, categoryValidate } = require('./middlewares');

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

app.get('/user/:id', jwt.authToken, userController.findUserById);

app.post('/categories', jwt.authToken, categoryValidate, categoryController.createCategory);

app.get('/categories', jwt.authToken, categoryController.listCategories);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
