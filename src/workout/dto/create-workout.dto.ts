import { IsOptional, IsString } from "class-validator";

export class CreateWorkoutDto {
    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    image: string;

    @IsString()
    description: string;
}
