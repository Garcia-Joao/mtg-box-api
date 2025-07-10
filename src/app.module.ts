import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './app.controller';

import { SetsModule } from './sets/sets.module';

@Module({
  imports: [SetsModule],
  controllers: [AppController , UsersController],
  providers: [AppService],
})
export class AppModule {}
