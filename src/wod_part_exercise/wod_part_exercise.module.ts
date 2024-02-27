import { Module } from '@nestjs/common';
import { WodPartExerciseService } from './wod_part_exercise.service';
import { WodPartExerciseController } from './wod_part_exercise.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WodPartExercise } from './entities/wod_part_exercise.entity';
import { Exercise } from '../exercises/entities/exercise.entity';
import { WodPart } from '../wod_part/entities/wod_part.entity';
import { Workout } from '../workout/entities/workout.entity';
import { WodPartModule } from '../wod_part/wod_part.module';
import { WorkoutModule } from '../workout/workout.module';
import { ExercisesModule } from '../exercises/exercises.module';

@Module({
  imports: [TypeOrmModule.forFeature([WodPartExercise, WodPart, Workout, Exercise]),
    WodPartModule,
    WorkoutModule,
    ExercisesModule,
  ],
  controllers: [WodPartExerciseController],
  providers: [WodPartExerciseService],
  exports: [WodPartExerciseService]
})
export class WodPartExerciseModule {}
