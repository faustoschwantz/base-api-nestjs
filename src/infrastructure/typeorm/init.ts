import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

const migrationsDir = 'src/infraesctucture/typeorm/migration';

const config = (): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  autoLoadEntities: true,
  cli: {
    migrationsDir,
  },
});

export const typeOrmInit = () => TypeOrmModule.forRoot(config());
