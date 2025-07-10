import prisma from '../prisma';

export class UsersService {
  async getUsers() {
    try {
      return await prisma.users.findMany();
    } catch (error) {
      throw new Error('Error fetching users');
    }
  }

  async createUser(email: string, pass: string) {
    try {
      return await prisma.users.create({
        data: { email, pass },
      });
    } catch (error) {
      throw new Error('Error creating user');
    }
  }
}

// CREATE TABLE users (
//     email TEXT NOT NULL,
//     pass TEXT NOT NULL
// );

// insert into users(email, pass) values ('tralalelo-tralala@gmail.com', '123')
