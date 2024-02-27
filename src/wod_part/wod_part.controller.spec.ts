import { Test, TestingModule } from '@nestjs/testing';
import { WodPartController } from './wod_part.controller';
import { WodPartService } from './wod_part.service';

describe('WodPartController', () => {
  let controller: WodPartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WodPartController],
      providers: [WodPartService],
    }).compile();

    controller = module.get<WodPartController>(WodPartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
