import { v4 as uuid } from 'uuid';
import { Brand } from 'src/brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Volvo',
    createdAt: new Date().getDate(),
  },
  {
    id: uuid(),
    name: 'Jeep',
    createdAt: new Date().getDate(),
  },
  {
    id: uuid(),
    name: 'Aston Martin',
    createdAt: new Date().getDate(),
  },
];
