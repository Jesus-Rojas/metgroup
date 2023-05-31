import { Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { StoresService } from "../services/stores.service";

@Controller('stores')
export class StoresController {
  constructor(private storesService: StoresService) {}

  @Get()
  async findAll() {
    const stores = await this.storesService.findAll()
    return { stores }
  }

  @Get(':name')
  async findByName(
    @Param('name') name: string
  ) {
    return this.storesService.findByName(name)
  }

  @Post(':name')
  create(
    @Param('name') name: string
  ) {
    return this.storesService.create(name)
  }

  @Delete(':name')
  async delete(
    @Param('name') name: string
  ){
    await this.storesService.delete(name);
    return { message: 'Store deleted' }
  }
}