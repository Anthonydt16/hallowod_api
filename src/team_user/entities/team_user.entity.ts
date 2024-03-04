import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { BaseModel } from 'src/utils/baseModel';
import { UserEntity } from 'src/user/entities/user.entity';
import { TeamEntity } from 'src/team/entities/team.entity';

@Entity('team_user')
export class TeamUserEntity extends BaseModel {

  @Column('uuid')
  userId: string;

  @ManyToOne(() => UserEntity, user => user.teams)
  user: UserEntity;

  @Column('uuid')
  teamId: string;

  @ManyToOne(() => TeamEntity, team => team.users)
  team: TeamEntity;

}
