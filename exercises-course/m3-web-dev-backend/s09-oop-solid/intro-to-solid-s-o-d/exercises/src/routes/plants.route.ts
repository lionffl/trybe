import { Router } from 'express';

const plants = Router();

plants.get('/', getPlants);

export default plants;