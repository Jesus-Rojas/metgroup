import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { CreateUserDTO } from '@metgroup/api-interfaces'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  findByUsername(username: string) {
    return this.userRepository.findOneBy({ username })
  }
  
  create(userDTO: CreateUserDTO) {
    return this.userRepository.save(userDTO);
  }
}