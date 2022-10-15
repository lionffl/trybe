import { Router } from 'express';

const plant = Router();

plant.route('/:id')
  .get(getPlantById)
  .delete(deletePlantaById)
  .put(updatePlantById);

plant.post('/', createPlant);

export default plant;