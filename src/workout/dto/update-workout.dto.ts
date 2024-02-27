import { PartialType } from '@nestjs/swagger';
import { CreateWorkoutDto } from './create-workout.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateWorkoutDto extends PartialType(CreateWorkoutDto) {
    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    image: string;

    @IsString()
    @IsOptional()
    description: string;
}
