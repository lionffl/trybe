const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes/index');

app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
