import fs from 'fs/promises';
import Plants from '../entities/Plants';
import IPlant from '../interfaces/IPlants';

class PlantsService extends Plants {
  public async getPlants(): Promise<IPlant[]> {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);
    return plants;
  }
}

export default new PlantsService();