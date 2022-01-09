import { MigrationInterface, QueryRunner } from 'typeorm';

export class PostRefactoring1641754016590 implements MigrationInterface {
  name = 'PostRefactoring1641754016590';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "examples" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "enable" boolean NOT NULL, CONSTRAINT "PK_ea56499b0a3a29593d3405080e8" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "examples"`);
  }
}
