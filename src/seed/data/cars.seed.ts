import { v4 as uuid } from 'uuid';
import { Car } from './../../cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'C34',
  },
  {
    id: uuid(),
    brand: 'Ford',
    model: 'X34',
  },
  {
    id: uuid(),
    brand: 'Audi',
    model: 'S34',
  },
  {
    id: uuid(),
    brand: 'Ford',
    model: 'Camaro SS',
  },
];
