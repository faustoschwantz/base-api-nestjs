import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'examples' })
export class ExampleMongoose {
  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  enable: boolean;

  @Prop({ default: Date.now })
  createdAt?: Date;
}

export const ExampleSchema = SchemaFactory.createForClass(ExampleMongoose);

export type ExampleDocument = ExampleMongoose & Document;
