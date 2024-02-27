import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateWodPartExercice1708978094935 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "wod_part_exercise",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: "deleted_at",
                    type: "timestamp",
                },
                {
                    name: "wod_part_id",
                    type: "int",
                },
                {
                    name: "workout_id",
                    type: "int",
                },
                {
                    name: "exercise_id",
                    type: "int",
                }
            ],
        }));

        await queryRunner.createForeignKey("wod_part_exercise", new TableForeignKey({
            columnNames: ["wod_part_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "wod_part",
            onDelete: "CASCADE",
        }));

        await queryRunner.createForeignKey("wod_part_exercise", new TableForeignKey({
            columnNames: ["workout_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "workout",
            onDelete: "CASCADE",
        }));

        await queryRunner.createForeignKey("wod_part_exercise", new TableForeignKey({
            columnNames: ["exercise_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "exercise",
            onDelete: "CASCADE",
        }));
        


                
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("wod_part_exercise", "wod_part_id");
        await queryRunner.dropForeignKey("wod_part_exercise", "workout_id");
        await queryRunner.dropForeignKey("wod_part_exercise", "exercise_id");
        await queryRunner.dropTable("wod_part_exercise");

    }

}
