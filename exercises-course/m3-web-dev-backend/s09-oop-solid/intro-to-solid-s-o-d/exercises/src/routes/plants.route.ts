import { Router } from 'express';
import PlantsController from '../controller/PlantsController';

const plants = Router();

plants.get('/', PlantsController.getPlants);

export default plants;