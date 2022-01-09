import { CreateExampleDto } from 'src/application/example/dto/create-example.dto';

export interface ICreateExampleService {
  execute(data: CreateExampleDto): Promise<void>;
}
