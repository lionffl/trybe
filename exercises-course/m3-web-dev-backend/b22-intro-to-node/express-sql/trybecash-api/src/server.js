const app = require('./app');
const connection = require('./db/connection');
require('dotenv').config();

const port = process.env.API_PORT;

const start = () => {
  try {
    app.listen(port, async () => {
    await connection.execute('SELECT 1');
    console.log('DB is connected.');
    console.log(`API Trybecash is running on ${port}`);
    });
    
  } catch (error) {
    console.log(error)
  }
};

start();