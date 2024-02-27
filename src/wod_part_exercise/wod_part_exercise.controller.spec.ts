import { Test, TestingModule } from '@nestjs/testing';
import { WodPartExerciseController } from './wod_part_exercise.controller';
import { WodPartExerciseService } from './wod_part_exercise.service';

describe('WodPartExerciseController', () => {
  let controller: WodPartExerciseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WodPartExerciseController],
      providers: [WodPartExerciseService],
    }).compile();

    controller = module.get<WodPartExerciseController>(WodPartExerciseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
