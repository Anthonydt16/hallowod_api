import { WodPartExercise } from "../../wod_part_exercise/entities/wod_part_exercise.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "exercise",
})
export class Exercise {
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

    @Column({
        name: "description",
    })
    description: string;

    @Column({
        name: "name",
    })
    name: string;

    @Column({
        name: "ratio",
    })
    ratio: number;

    @OneToMany(() => WodPartExercise, wodPartExercise => wodPartExercise.exercise)
    wodPartExercises: WodPartExercise[];
    
}
