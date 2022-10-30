import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Nissan',
    },
    {
      id: uuid(),
      brand: 'A3',
      model: 'Audi',
    },
  ];

  public findAll() {
    return this.cars;
  }

  public findOneById(id: string) {
    const cars = this.cars.find((car) => car.id === id);
    if (!cars) throw new NotFoundException(`Car with id '${id}' not found`);
    return cars;
  }
}
