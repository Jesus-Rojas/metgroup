export interface UserDTO {
  username: string;
}

export interface CreateUserDTO extends UserDTO {
  password: string;
}

export interface UpdateUserDTO extends UserDTO {
  password?: string;
}