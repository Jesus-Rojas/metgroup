import { CreateUserDTO } from "@metgroup/api-interfaces";
import { Controller, Post } from "@nestjs/common";
import { AccessControlService } from "../services/access-control.service";

@Controller()
export class AccessControlController {
  constructor (private accessControlService: AccessControlService) { }

  @Post('register')
  async register(data: CreateUserDTO) {
    await this.accessControlService.register(data)
    return { message: 'User created succesfully.' }
  }

  @Post()
  auth(data: CreateUserDTO) {
    return {
      access_token: 'aaaaa'
    }
  }
}