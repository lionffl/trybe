import fs from 'fs/promises';
import Plants from '../entities/Plants';
import IPlant from '../interfaces/IPlants';

class SunnyService extends Plants {
  public async getPlantsThatNeedsSunWithId(
    id: string,
  ): Promise<IPlant[]> {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const filteredPlants = plants.filter((plant) =>
      plant.id === id
      && plant.needsSun
      && (!plant.specialCare
        || plant.specialCare.waterFrequency > 2));

    return filteredPlants;
  }
}

export default new SunnyService();