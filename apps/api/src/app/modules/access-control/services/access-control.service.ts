import { CreateUserDTO } from "@metgroup/api-interfaces";
import { BadRequestException, Injectable } from "@nestjs/common";
import { UsersService } from "../../users/services/users.service";

@Injectable()
export class AccessControlService {
  constructor(private usersService: UsersService) {}
  
  async register(userDTO: CreateUserDTO) {
    const user = await this.usersService.findByUsername(userDTO.username);
    if (user) {
      throw new BadRequestException(`User ${user.username} exist`);
    }
    this.usersService.create(user)
  }
}