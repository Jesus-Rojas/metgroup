import { DataSourceOptions } from 'typeorm';
import { entities } from './entities';
import { MainSeeder } from '../seeds/main-seeder';
import { SeederOptions } from 'typeorm-extension';

const useSSL = process.env.CONNECT_DB_THROUGH_SSL === 'true';

console.log('=======================');
console.log(process.env.DB_URL);
console.log('=======================');


export const dataSourceConfig: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  url: process.env.DB_URL,
  entities,
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
  seeds: [MainSeeder],
  ssl: useSSL,
  extra: useSSL
    ? {
        ssl: {
          rejectUnauthorized: false,
        },
      }
    : {},
  synchronize: true,
  logging: true,
};
