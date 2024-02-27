import { Injectable } from '@nestjs/common';
import { CreateWodPartExerciseDto } from './dto/create-wod_part_exercise.dto';
import { UpdateWodPartExerciseDto } from './dto/update-wod_part_exercise.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { WodPartExercise } from './entities/wod_part_exercise.entity';
import { DataSource, Repository } from 'typeorm';
import { WodPart } from '../wod_part/entities/wod_part.entity';
import { Workout } from '../workout/entities/workout.entity';
import { Exercise } from '../exercises/entities/exercise.entity';

@Injectable()
export class WodPartExerciseService {

  constructor(
    @InjectRepository(WodPartExercise)
    private wodPartExerciseRepository: Repository<WodPartExercise>,
    @InjectRepository(WodPart)
    private wodPartRepository: Repository<WodPart>,
    @InjectRepository(Workout)
    private workoutRepository: Repository<Workout>,
    @InjectRepository(Exercise)
    private exerciseRepository: Repository<Exercise>,
    private dataSource: DataSource,
  ) {}

  async create(createWodPartExerciseDto: CreateWodPartExerciseDto) {
    const { wodPart, workout, exercise } = createWodPartExerciseDto;
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const wodPartRep = await this.wodPartRepository.create(wodPart);
      const workoutRep = await this.workoutRepository.create(workout);
      const exerciseRep = await this.exerciseRepository.create(exercise);

      const wodPartExercise = this.wodPartExerciseRepository.create({
        wodPart: wodPartRep,
        workout: workoutRep,
        exercise: exerciseRep,
      });

      await queryRunner.commitTransaction();
      return await this.wodPartExerciseRepository.save(wodPartExercise);
    }
    catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    }
    finally {
      await queryRunner.release();
    }
    
  }

  findAll() {
    return `This action returns all wodPartExercise`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wodPartExercise`;
  }

  update(id: number, updateWodPartExerciseDto: UpdateWodPartExerciseDto) {
    return `This action updates a #${id} wodPartExercise`;
  }

  remove(id: number) {
    return `This action removes a #${id} wodPartExercise`;
  }
}
