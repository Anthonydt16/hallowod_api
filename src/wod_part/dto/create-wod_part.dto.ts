import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { WodPartType } from "../entities/wod_part.entity";
export class CreateWodPartDto {
    
    @IsEnum(WodPartType)
    @IsNotEmpty()
    wodType: WodPartType;

    @IsString()
    @IsNotEmpty()
    actifTime: string;

    @IsString()
    @IsNotEmpty()
    restTime: string;

}
