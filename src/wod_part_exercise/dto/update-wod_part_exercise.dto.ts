import { PartialType } from '@nestjs/swagger';
import { CreateWodPartExerciseDto } from './create-wod_part_exercise.dto';

export class UpdateWodPartExerciseDto extends PartialType(CreateWodPartExerciseDto) {}
