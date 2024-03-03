import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Category1709331291431 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'category',
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
            name: 'age_min',
            type: 'int',
          },
          {
            name: 'age_max',
            type: 'int',
          },
          {
            name: 'nb_team_max',
            type: 'int',
          },
          //ajouter une colonne pour le nombre de personne par équipe
          {
            name: 'nb_person_max_by_team',
            type: 'int',
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
            name: 'contest_id',
            type: 'uuid',
          },
        ],
      }),
    );
    queryRunner.createForeignKey(
      'contest',
      new TableForeignKey({
        columnNames: ['contest_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'contest',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('category');
  }
}
