import { Module } from '@nestjs/common';
import { PartWorkoutService } from './part_workout.service';
import { PartWorkoutController } from './part_workout.controller';

@Module({
  controllers: [PartWorkoutController],
  providers: [PartWorkoutService],
})
export class PartWorkoutModule {}
