import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

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
    return createCarDto;
  }

  @Patch(':id')
  udpateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return { ...body, id };
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'DELETE',
      id,
    };
  }
}
