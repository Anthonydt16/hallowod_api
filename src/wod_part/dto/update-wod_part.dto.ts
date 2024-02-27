import { PartialType } from '@nestjs/swagger';
import { CreateWodPartDto } from './create-wod_part.dto';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { WodPartType } from '../entities/wod_part.entity';

export class UpdateWodPartDto extends PartialType(CreateWodPartDto) {

    @IsString()
    @IsOptional()
    actifTime: string;

    @IsString()
    @IsOptional()
    restTime: string;

    @IsEnum(WodPartType)
    @IsOptional()
    wodType: WodPartType;
    
}
