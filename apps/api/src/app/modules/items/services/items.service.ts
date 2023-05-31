import { CreateItemDTO, UpdateItemDTO } from "@metgroup/api-interfaces";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Item } from "../entities/item.entity";

@Injectable()
export class ItemsService {
  constructor (
    @InjectRepository(Item)
    private itemRepository: Repository<Item>
  ) { }

  async create(data: CreateItemDTO) {
    const { price, storeId, name } = data
    const item = await this.findByName(name)
    if (item) {
      throw new NotFoundException("Item exist");
    }
    this.itemRepository.save({ name, price, store: { id: storeId }  })
  }
  async update(data: UpdateItemDTO) {
    const { price, storeId, name } = data
    const item = await this.findByName(name)
    if (!item) {
      throw new NotFoundException("Item not found");
    }
    return this.itemRepository.update(item.id, { name, price, store: { id: storeId } })
  }

  findAll(){
    return this.itemRepository.find();
  }

  async findByName(name: string) {
    return this.itemRepository.findOneBy({ name })
  }

  async delete(name: string) {
    const item = await this.findByName(name)
    if (!item) {
      throw new NotFoundException("Item not found");
    }
    return this.itemRepository.delete(item.id)
  }

}