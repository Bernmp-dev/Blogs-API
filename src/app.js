const express = require('express');
const router = require('./routers');

const app = express();
app.use(express.json());

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use('/login', router.loginRouter);
app.use('/user', router.userRouter);
app.use('/categories', router.categoryRouter);
app.use('/post', router.postRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
