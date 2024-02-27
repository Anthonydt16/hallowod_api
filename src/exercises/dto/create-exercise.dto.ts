import { IsInt, IsString } from "class-validator";

export class CreateExerciseDto {
    @IsString()
    description: string;

    @IsString()
    name: string;
    
    @IsInt()
    ratio: number;
}
