import { Test, TestingModule } from '@nestjs/testing';
import { WodPartExerciseService } from './wod_part_exercise.service';

describe('WodPartExerciseService', () => {
  let service: WodPartExerciseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WodPartExerciseService],
    }).compile();

    service = module.get<WodPartExerciseService>(WodPartExerciseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
