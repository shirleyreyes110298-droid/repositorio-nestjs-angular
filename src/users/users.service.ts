import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

export type User = {
  userId: number;
  name: string;
  email: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      userId: 1,
      name: 'prueba2',
      email: 'rp@hm.com',
      // password: 1234567 encriptado
      password: bcrypt.hashSync('1234567', 10),
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }
}