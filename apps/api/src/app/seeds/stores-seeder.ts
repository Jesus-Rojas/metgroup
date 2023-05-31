import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Store } from '../modules/stores/entities/stores.entity';
import { Store as StoreI } from '../modules/stores/types/store.interface';

export class StoresSeeder implements Seeder {
  async run(dataSource: DataSource) {
    const storeRepository = dataSource.getRepository(Store);
    const stores: StoreI[] = [
      { id: 1, name: 'test' },
      { id: 2, name: 'test2' },
      { id: 3, name: 'test3' },
      { id: 4, name: 'test4' },
    ];

    storeRepository.save(stores);
  }
}
