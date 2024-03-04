import { CategoryEntity } from "src/category/entities/category.entity";
import { TeamEntity } from "src/team/entities/team.entity";
import { BaseModel } from "src/utils/baseModel";
import { WorkoutEntity } from "src/workout/entities/workout.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity({
    name: 'contests',
})
export class ContestEntity extends BaseModel {
    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    city: string;

    @Column()
    date: Date;

    @Column()
    gps_coordinates: string;

    @ManyToOne(() => WorkoutEntity, (workout) => workout.contest)
    workouts: WorkoutEntity[];

    @ManyToOne(() => CategoryEntity, (category) => category.contest)
    categorys: CategoryEntity[];

    @ManyToOne(() => TeamEntity, (team) => team.contest)
    teams: TeamEntity[];
}
