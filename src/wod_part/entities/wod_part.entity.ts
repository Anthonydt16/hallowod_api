import { Matches } from "class-validator";
import { WodPartExercise } from "../../wod_part_exercise/entities/wod_part_exercise.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum WodPartType {
    ForTime = "ForTime",
    Amrap = "Amrap",
    Tabata = "Tabata",
    Emom = "Emom",
    Custom = "Custom",
}

@Entity({
    name: "wod_part",
})
export class WodPart {

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
        name: "wod_type",
    })
    wodType: WodPartType;

    @Column({
        name: "actif_time",
    })
    @Matches(/^[0-9]{2}:[0-9]{2}:[0-9]{2}$/)
    actifTime: string;

    @Column({
        name: "rest_time",
    })
    @Matches(/^[0-9]{2}:[0-9]{2}:[0-9]{2}$/)
    restTime: string;

    @OneToMany(() => WodPartExercise, wodPartExercise => wodPartExercise.wodPart)
    wodPartExercises: WodPartExercise[];
}
