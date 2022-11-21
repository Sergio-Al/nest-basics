import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/udpate-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  //   @Get()
  //   getAllCars() {
  //     return this.carsService.;
  //   }

  //   @Get(':id')
  //   getCarById(@Param('id') id: string) {
  //     console.log('your id', id);
  //     return {
  //       name: this.cars[+id],
  //     };
  //     // return !!this.cars[+id] ? { name: this.cars[+id] } : { error: 'Not found' };
  //   }

  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  @Get(':id')
  findOneById(
    @Param('id', ParseUUIDPipe)
    id: string,
  ) {
    console.log({ id });
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.createCar(createCarDto);
  }

  @Patch(':id')
  udpateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carsService.updateCar(id, updateCarDto);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.deleteCar(id);
  }
}
