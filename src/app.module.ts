import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SetsModule } from './sets/sets.module';

@Module({
  imports: [SetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
