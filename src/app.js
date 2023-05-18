const express = require('express');
const { userController, categoryController, blogPostController } = require('./controllers');
const midd = require('./middlewares');

const { jwt } = midd;

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

app.post('/login', midd.loginValidate, jwt.createToken, userController.login);

app.post('/user', midd.emailValidate, jwt.createToken, userController.createUser);

app.get('/user', jwt.authToken, userController.listUsers);

app.get('/user/:id', jwt.authToken, userController.findUserById);

app.post('/categories', jwt.authToken, midd.categoryValidate, categoryController.createCategory);

app.get('/categories', jwt.authToken, categoryController.listCategories);

app.post('/post', jwt.authToken, midd.postValidate, blogPostController.createPost);

app.get('/post', jwt.authToken, blogPostController.listPosts);

app.get('/post/:id', jwt.authToken, blogPostController.listPostsById);

app.put(
  '/post/:id',
  jwt.authToken,
  midd.verifyUserPost,
  midd.updateValidate,
  blogPostController.updatePost,
  );

app.delete('/post/:id', jwt.authToken, midd.verifyUserPost, blogPostController.deletePost);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
