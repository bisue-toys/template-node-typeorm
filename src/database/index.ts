import { DataSource } from 'typeorm';
import { Article } from './entities/Article';
import 'reflect-metadata';
import dotenv from 'dotenv';

dotenv.config();

const dataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST ?? 'localhost',
  port: Number.parseInt(process.env.DB_PORT ?? '3306'),
  username: process.env.DB_USER ?? 'root',
  password: process.env.DB_PASSWORD ?? 'root',
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: [Article],
  subscribers: [],
  migrations: [],
});

export default dataSource;
