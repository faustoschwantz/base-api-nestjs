import { MongooseModule } from '@nestjs/mongoose';

export const mongooseInit = () =>
  MongooseModule.forRoot(process.env.MONGODB_CONN_STRING);
