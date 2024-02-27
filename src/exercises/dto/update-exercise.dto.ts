import { PartialType } from '@nestjs/swagger';
import { CreateExerciseDto } from './create-exercise.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateExerciseDto extends PartialType(CreateExerciseDto) {
    @IsNumber()
    @IsOptional()
    ratio: number;

    @IsString()
    @IsOptional()
    description: string;

    @IsString()
    @IsOptional()
    name: string;

}
