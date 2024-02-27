import { Module } from '@nestjs/common';
import { WodPartExerciseService } from './wod_part_exercise.service';
import { WodPartExerciseController } from './wod_part_exercise.controller';

@Module({
  controllers: [WodPartExerciseController],
  providers: [WodPartExerciseService],
})
export class WodPartExerciseModule {}
