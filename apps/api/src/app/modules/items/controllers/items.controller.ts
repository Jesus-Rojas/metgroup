import { CreateItemDTO, UpdateItemDTO } from "@metgroup/api-interfaces";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ItemsService } from "../services/items.service";

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  async findAll() {
    const stores = await this.itemsService.findAll()
    return {
      stores
    }
  }

  @Get(':name')
  async findByName(
    @Param('name') name: string
  ) {
    return this.itemsService.findByName(name)
  }

  @Post(':name')
  async create(
    @Param('name') name: string,
    @Body() data: CreateItemDTO
  ) {
    return this.itemsService.create({ ...data, name });
  }

  @Put(':name')
  async update(
    @Param('name') name: string,
    @Body() data: UpdateItemDTO
  ) {
    return this.itemsService.update({ ...data, name });
  }

  @Delete(':name')
  async delete(
    @Param('name') name: string
  ){
    await this.itemsService.delete(name);
    return { message: 'Store deleted' }
  }
}