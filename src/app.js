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

app.use(jwt.authToken);

app.get('/user', userController.listUsers);

app.get('/user/:id', userController.findUserById);

app.delete('/user/me', userController.deleteMyUser);

app.post('/categories', midd.categoryValidate, categoryController.createCategory);

app.get('/categories', categoryController.listCategories);

app.get('/post/search', blogPostController.listBySearch);

app.get('/post', blogPostController.listPosts);

app.get('/post/:id', blogPostController.listPostsById);

app.post('/post', midd.postValidate, blogPostController.createPost);

app.put(
  '/post/:id',
  midd.verifyUserPost,
  midd.updateValidate,
  blogPostController.updatePost,
  );

app.delete('/post/:id', midd.verifyUserPost, blogPostController.deletePost);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
