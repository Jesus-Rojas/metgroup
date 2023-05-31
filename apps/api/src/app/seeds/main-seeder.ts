import { DataSource } from 'typeorm';
import { runSeeder, Seeder } from 'typeorm-extension';
import { StoresSeeder } from './stores-seeder';

export class MainSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    await runSeeder(dataSource, StoresSeeder);
  }
}
