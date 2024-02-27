import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WodPartExerciseService } from './wod_part_exercise.service';
import { CreateWodPartExerciseDto } from './dto/create-wod_part_exercise.dto';
import { UpdateWodPartExerciseDto } from './dto/update-wod_part_exercise.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('wod-part-exercise')
@Controller('wod-part-exercise')
export class WodPartExerciseController {
  constructor(private readonly wodPartExerciseService: WodPartExerciseService) {}

  @Post()
  create(@Body() createWodPartExerciseDto: CreateWodPartExerciseDto) {
    return this.wodPartExerciseService.create(createWodPartExerciseDto);
  }

  @Get()
  findAll() {
    return this.wodPartExerciseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wodPartExerciseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWodPartExerciseDto: UpdateWodPartExerciseDto) {
    return this.wodPartExerciseService.update(+id, updateWodPartExerciseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wodPartExerciseService.remove(+id);
  }
}
