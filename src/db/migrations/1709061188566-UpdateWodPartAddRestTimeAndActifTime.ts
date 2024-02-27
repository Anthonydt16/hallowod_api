import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class UpdateWodPartAddRestTimeAndActifTime1709061188566 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('wod_part', [
            new TableColumn({
                name: 'rest_time',
                type: 'varchar',
                length: '9',
                isNullable: true,
                asExpression: 'CHECK (rest_time ~ \'^[0-9]{2}:[0-9]{2}:[0-9]{2}$\')',
            }),
            new TableColumn({
                name: 'actif_time',
                type: 'varchar',
                length: '9',
                isNullable: true,
                asExpression: 'CHECK (actif_time ~ \'^[0-9]{2}:[0-9]{2}:[0-9]{2}$\')',
                
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('wod_part', 'rest_time');
        await queryRunner.dropColumn('wod_part', 'actif_time');
    }


}
