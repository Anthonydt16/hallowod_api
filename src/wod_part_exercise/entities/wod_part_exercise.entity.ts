import { Exercise } from "../../exercises/entities/exercise.entity";
import { WodPart } from "../../wod_part/entities/wod_part.entity";
import { Workout } from "../../workout/entities/workout.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "wod_part_exercise",
})
export class WodPartExercise {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: "created_at",
    })
    createdAt: Date;

    @Column({
        name: "deleted_at",
    })
    deletedAt: Date;

    @ManyToOne(() => WodPart, wodPart => wodPart.wodPartExercises)
    wodPart: WodPart;
  
    @ManyToOne(() => Workout, workout => workout.wodPartExercises)
    workout: Workout;
  
    @ManyToOne(() => Exercise, exercise => exercise.wodPartExercises)
    exercise: Exercise;

    

    
}
