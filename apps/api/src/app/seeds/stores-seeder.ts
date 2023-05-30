import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Stores } from '../modules/stores/entities/stores.entity';
import { Store } from '../modules/stores/types/store.interface';

export class StoresSeeder implements Seeder {
  async run(dataSource: DataSource, factoryManager: SeederFactoryManager) {
    const storeRepository = dataSource.getRepository(Stores);
    const stores: Store[] = [
      { id: 1, name: 'test' },
      { id: 2, name: 'test2' },
      { id: 3, name: 'test3' },
      { id: 4, name: 'test4' },
    ];

    storeRepository.save(stores);
  }
}
