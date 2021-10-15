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

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
