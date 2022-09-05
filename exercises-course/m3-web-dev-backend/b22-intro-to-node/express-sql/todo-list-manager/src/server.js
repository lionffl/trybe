const app = require('./app');
const connection = require('../src/db/connection');
require('dotenv').config();

const port = process.env.API_PORT;

const start = async () => {

  try {
    const [ result ] = await connection.execute('SELECT 1');
    if (result) {
      app.listen(port, async () => {
      console.log('DB is connected.');
      console.log(`Tasks Manager API está sendo executada na porta ${port}`);
      });
    }
  } catch (error) {
    console.log(error);
  }
}

start();