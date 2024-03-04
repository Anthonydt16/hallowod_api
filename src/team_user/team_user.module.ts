import { Module } from '@nestjs/common';
import { TeamUserService } from './team_user.service';
import { TeamUserController } from './team_user.controller';

@Module({
  controllers: [TeamUserController],
  providers: [TeamUserService],
})
export class TeamUserModule {}
