import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { dataSourceConfig } from './data-source-config';

export const AppDataSource = new DataSource(dataSourceConfig);

console.log(AppDataSource);
