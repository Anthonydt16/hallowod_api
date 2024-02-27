import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WodPartService } from './wod_part.service';
import { CreateWodPartDto } from './dto/create-wod_part.dto';
import { UpdateWodPartDto } from './dto/update-wod_part.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('wod-part')
@Controller('wod-part')
export class WodPartController {
  constructor(private readonly wodPartService: WodPartService) {}

  @Post()
  create(@Body() createWodPartDto: CreateWodPartDto) {
    return this.wodPartService.create(createWodPartDto);
  }

  @Get()
  findAll() {
    return this.wodPartService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wodPartService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWodPartDto: UpdateWodPartDto) {
    return this.wodPartService.update(+id, updateWodPartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wodPartService.remove(+id);
  }
}
