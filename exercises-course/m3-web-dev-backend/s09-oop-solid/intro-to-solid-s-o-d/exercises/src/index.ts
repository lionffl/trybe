import express from 'express';
import plants from './routes';

const app = express();

app.use(plants);
