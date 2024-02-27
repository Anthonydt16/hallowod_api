import { Injectable } from '@nestjs/common';
import { CreateWodPartDto } from './dto/create-wod_part.dto';
import { UpdateWodPartDto } from './dto/update-wod_part.dto';

@Injectable()
export class WodPartService {
  create(createWodPartDto: CreateWodPartDto) {
    return 'This action adds a new wodPart';
  }

  findAll() {
    return `This action returns all wodPart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wodPart`;
  }

  update(id: number, updateWodPartDto: UpdateWodPartDto) {
    return `This action updates a #${id} wodPart`;
  }

  remove(id: number) {
    return `This action removes a #${id} wodPart`;
  }
}
