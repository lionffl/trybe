import IPlant from '../interfaces/IPlants';

class Plants {
  private readonly _plantsFile = 'plantsData.json';
  private readonly _opsFile = 'opsInfo.json';

  public static initPlant(plant: IPlant): IPlant {
    const { id, breed, needsSun, origin, specialCare, size } = plant;
    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);

    const newPlant: IPlant = {
      id,
      breed,
      needsSun,
      origin,
      specialCare: {
        ...specialCare,
        waterFrequency,
      },
      size,
    };

    return newPlant;
  }

  get plantsFile(): string {
    return this._plantsFile;
  }

  get opsFile(): string {
    return this._opsFile;
  }
}

export default Plants;