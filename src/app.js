const express = require('express');
const bodyParser = require('body-parser');

const {
  userRouter,
  loginRouter,
  categoriesRouter,
  postRouter,
} = require('./routes');

const { ErrorMiddleware } = require('./middlewares');

const app = express();
app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);

app.use(ErrorMiddleware);

module.exports = app;