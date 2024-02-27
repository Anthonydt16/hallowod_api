import { Module } from '@nestjs/common';
import { WodPartService } from './wod_part.service';
import { WodPartController } from './wod_part.controller';

@Module({
  controllers: [WodPartController],
  providers: [WodPartService],
})
export class WodPartModule {}
