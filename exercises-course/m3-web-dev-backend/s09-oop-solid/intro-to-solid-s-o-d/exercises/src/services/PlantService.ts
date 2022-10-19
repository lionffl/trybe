import fs from 'fs/promises';
import Plants from '../entities/Plants';
import IOpsInfo from '../interfaces/IOpsInfo';
import IPlant from '../interfaces/IPlants';

class PlantService extends Plants {
  public async getPlantById(
    id: string,
  ): Promise<IPlant | null> {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const plantById = plants.find((plant) => plant.id === id);
    if (!plantById) return null;
    return plantById;
  }

  public async removePlantById(
    id: string,
  ): Promise<IPlant | null> {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const removedPlant = plants.find((plant) => plant.id === id);
    if (!removedPlant) return null;

    const newPlants = plants.filter((plant) => plant.id !== id);
    await fs.writeFile(this.plantsFile, JSON.stringify(newPlants));

    return removedPlant;
  }

  public async editPlant(
    plantId: string,
    newPlant: IPlant,
  ): Promise<IPlant> {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const updatedPlants = plants.map((plant) => {
      if (plant.id === plantId) return newPlant;
      return plant;
    });

    await fs.writeFile(this.plantsFile, JSON.stringify(updatedPlants));
    return newPlant;
  }

  public async savePlant(
    plant: IPlant,
  ): Promise<IPlant> {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const newPlant = Plants.initPlant({ ...plant });
    plants.push(newPlant);

    const opsInfoRaw = await fs.readFile(this.opsFile, { encoding: 'utf8' });
    let { createdPlants }: IOpsInfo = JSON.parse(opsInfoRaw);
    createdPlants += 1;
    await fs.writeFile(this.opsFile, JSON.stringify({ createdPlants }));

    await fs.writeFile(this.plantsFile, JSON.stringify(plants));
    return newPlant;
  }
}

export default new PlantService();