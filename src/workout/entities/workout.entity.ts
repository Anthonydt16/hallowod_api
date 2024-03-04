import { ContestEntity } from "src/contest/entities/contest.entity";
import { PartWorkoutEntity } from "src/part_workout/entities/part_workout.entity";
import { BaseModel } from "src/utils/baseModel";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity('workout')
export class WorkoutEntity extends BaseModel {
    @Column()
    name: string;
    
    @Column()
    description: string;
    
    @Column('uuid')
    contest_id: string;

    @ManyToOne(() => ContestEntity, (contest) => contest.workouts)
    contest: ContestEntity;

    @OneToMany(() => PartWorkoutEntity, (partWorkout) => partWorkout.workout)
    partWorkouts: PartWorkoutEntity[];

}
