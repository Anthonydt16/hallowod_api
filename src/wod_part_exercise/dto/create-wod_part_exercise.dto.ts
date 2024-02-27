import { IsNotEmpty, IsObject, IsString } from "class-validator";
import { CreateWodPartDto } from "../../wod_part/dto/create-wod_part.dto";
import { CreateWorkoutDto } from "../../workout/dto/create-workout.dto";
import { CreateExerciseDto } from "../../exercises/dto/create-exercise.dto";

export class CreateWodPartExerciseDto {
    @IsObject()
    @IsNotEmpty()
    wodPart: CreateWodPartDto;

    @IsObject()
    @IsNotEmpty()
    workout: CreateWorkoutDto;

    @IsObject()
    @IsNotEmpty()
    exercise: CreateExerciseDto;
}
