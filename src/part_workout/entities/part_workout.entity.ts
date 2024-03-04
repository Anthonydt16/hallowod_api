import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { WorkoutEntity } from 'src/workout/entities/workout.entity';
import { BaseModel } from 'src/utils/baseModel';
import { ExerciseEntity } from 'src/exercise/entities/exercise.entity';
export enum typePartWorkout {
    FORTIME = 'FORTIME',
    AMRAP = 'AMRAP',
    EMOM = 'EMOM',
    INTERVAL = 'INTERVAL',
    TABATA = 'TABATA',
  }

@Entity('part_workout')
export class PartWorkoutEntity extends BaseModel {

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('uuid')
  workoutId: string;

  @ManyToOne(() => WorkoutEntity, workout => workout.partWorkouts)
  workout: WorkoutEntity;

  @Column({
    type: 'enum',
    enum: [
      typePartWorkout.FORTIME,
      typePartWorkout.AMRAP,
      typePartWorkout.EMOM,
      typePartWorkout.INTERVAL,
      typePartWorkout.TABATA,
    ],
  })
  type: string;

  @Column()
  duration: string;

  @OneToMany(() => ExerciseEntity, (exercise) => exercise.category)
  exercises: ExerciseEntity[];
}
