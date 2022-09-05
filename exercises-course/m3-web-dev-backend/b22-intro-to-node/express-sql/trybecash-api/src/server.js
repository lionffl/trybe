const app = require('./app');

const port = process.env.port || 3001;

app.listen(port, async () => {
  console.log(`API TrybeCash está sendo executada na porta ${port}`);
});