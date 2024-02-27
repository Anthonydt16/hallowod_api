import { WodPartExercise } from "../../wod_part_exercise/entities/wod_part_exercise.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity({
    name: "workouts",
    })
export class Workout {
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

    @Column()
    name: string;

    @Column()
    image: string;

    @Column()
    description: string;

    @OneToMany(() => WodPartExercise, wodPartExercise => wodPartExercise.workout)
    wodPartExercises: WodPartExercise[];
}
