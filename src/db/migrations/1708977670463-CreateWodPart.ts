import { WodPartType } from "../../wod_part/entities/wod_part.entity";
import { MigrationInterface, QueryRunner,Table } from "typeorm";

export class CreateWodPart1708977670463 implements MigrationInterface {


    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "wod_part",
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
                    name: "wod_type",
                    type: "enum",
                    enum: Object.values(WodPartType),
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("wod_part");
    }

}
