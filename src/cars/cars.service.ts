import { CreateCarDto, UpdateCarDto } from './dto';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Corolla',
    // },
  ];

  public findAll() {
    return this.cars;
  }

  public findOneById(id: string) {
    const cars = this.cars.find((car) => car.id === id);
    if (!cars) throw new NotFoundException(`Car with id '${id}' not found`);
    return cars;
  }

  public createCar(createCarDto: CreateCarDto) {
    const newCar: Car = { id: uuid(), ...createCarDto };

    this.cars.push(newCar);

    return newCar;
  }

  public updateCar(id: string, udpateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id);

    if (udpateCarDto.id && udpateCarDto.id !== id)
      throw new BadRequestException('Id must not be updated');

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...udpateCarDto,
          id,
        };
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  public deleteCar(id: string) {
    this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }

  public fillCarsWithData(cars: Car[]) {
    this.cars = cars;
  }
}
