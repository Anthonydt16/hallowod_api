import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export enum typePartWorkout {
  FORTIME = 'FORTIME',
  AMRAP = 'AMRAP',
  EMOM = 'EMOM',
  INTERVAL = 'INTERVAL',
  TABATA = 'TABATA',
}

export class PartWorkout1709329683965 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'part_workout',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'text',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'workout_id',
            type: 'uuid',
          },
          {
            name: 'type',
            type: 'enum',
            enum: [
              typePartWorkout.FORTIME,
              typePartWorkout.AMRAP,
              typePartWorkout.EMOM,
              typePartWorkout.INTERVAL,
              typePartWorkout.TABATA,
            ],
            default: typePartWorkout.FORTIME,
          },
          {
            name: 'duration',
            type: 'varchar',
          },
        ],
      }),
    );

    //rajouter la clé étrangere
    queryRunner.createForeignKey(
      'workout',
      new TableForeignKey({
        columnNames: ['workout_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'workout',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('part_workout');
  }
}
