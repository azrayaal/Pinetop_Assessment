import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigrations1717579145733 implements MigrationInterface {
    name = 'MyMigrations1717579145733'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`vehicle\` (\`vehicle_id\` int NOT NULL AUTO_INCREMENT, \`type\` varchar(255) NOT NULL, \`lock_status\` varchar(255) NOT NULL, \`current_speed\` varchar(255) NOT NULL, \`battery_level\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL, \`location\` varchar(255) NOT NULL, \`last_update\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`vehicle_id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`vehicle\``);
    }

}
