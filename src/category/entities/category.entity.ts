import { ContestEntity } from 'src/contest/entities/contest.entity';
import { ExerciseEntity } from 'src/exercise/entities/exercise.entity';
import { TeamEntity } from 'src/team/entities/team.entity';
import { BaseModel } from 'src/utils/baseModel';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';

@Entity('category')
export class CategoryEntity extends BaseModel {

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('int')
  ageMin: number;

  @Column('int')
  ageMax: number;

  @Column('int')
  nbTeamMax: number;

  @Column('int')
  nbPersonMaxByTeam: number;

  @Column('uuid')
  contestId: string;

  @OneToMany(() => ContestEntity, (contest) => contest.categorys)
    contest: ContestEntity;

    @ManyToOne(() => ExerciseEntity, (exercise) => exercise.category)
    exercises: ExerciseEntity[];

    @ManyToOne(() => TeamEntity, (team) => team.category)
    teams: TeamEntity[];
    
}
