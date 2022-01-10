import { MongooseModule } from '@nestjs/mongoose';

export const mongooseInit = () => {
  console.log(process.env.MONGODB_CONN_STRING);
  return MongooseModule.forRoot(process.env.MONGODB_CONN_STRING);
};
