const express = require('express');
const bodyParser = require('body-parser');

const productsRouter = require('./routes/products');
const salesRouter = require('./routes/sales');

require('dotenv').config();

const { PORT } = process.env;

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productsRouter);
app.use('/sales', salesRouter);

app.listen(PORT, () => console.log(`Applying on port ${PORT}`));
