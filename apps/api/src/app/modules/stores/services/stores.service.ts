import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Store } from "../entities/stores.entity";

@Injectable()
export class StoresService {
  constructor (
    @InjectRepository(Store)
    private storeRepository: Repository<Store>
  ) { }

  async create(name: string) {
    const store = await this.findByName(name)
    if (store) {
      throw new NotFoundException("Store exist");
    }
    return this.storeRepository.save({ name })
  }

  findAll(){
    return this.storeRepository.find();
  }

  async findByName(name: string) {
    return this.storeRepository.findOneBy({ name })
  }

  async delete(name: string) {
    const store = await this.findByName(name)
    if (!store) {
      throw new NotFoundException("Store not found");
    }
    return this.storeRepository.delete(store.id)
  }

}