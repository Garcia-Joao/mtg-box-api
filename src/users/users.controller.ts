import { Controller, Get, Post, Body } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Controller('users')
export class UsersController {
  @Post()
  async createUser(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    return await prisma.users.create({
      data: { email, pass: password },
    });
  }
  @Get()
  async getUsers() {
    return await prisma.users.findMany();
  }
}