import { Module } from '@nestjs/common';
import { ResService } from './res.service.js';
import { ResController } from './res.controller.js';

@Module({
  controllers: [ResController],
  providers: [ResService],
})
export class ResModule {}
