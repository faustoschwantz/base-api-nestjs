import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as helmet from 'helmet';

import { port } from 'src/infraestructure/config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet);

  await app.listen(port);
}
bootstrap();
