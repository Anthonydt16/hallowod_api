import { Test, TestingModule } from '@nestjs/testing';
import { WodPartService } from './wod_part.service';

describe('WodPartService', () => {
  let service: WodPartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WodPartService],
    }).compile();

    service = module.get<WodPartService>(WodPartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
