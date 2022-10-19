import { Router } from 'express';
// import plant from './plant.route';
import plants from './plants.route';
// import sunny from './sunny.route';

const routes = Router();

routes.use('/plants', plants);

// routes.use('/plant', plant);

// routes.use('/sunny', sunny);

export default routes;