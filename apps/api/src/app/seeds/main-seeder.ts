import { DataSource } from 'typeorm';
import { runSeeder, Seeder, SeederFactoryManager } from 'typeorm-extension';
import { StoresSeeder } from './stores-seeder';

export class MainSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    await runSeeder(dataSource, StoresSeeder);
  }
}
