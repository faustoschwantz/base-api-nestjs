import { CreateExampleDto } from 'src/application/example/dto/create-example.dto';
import { ExampleDto } from 'src/application/example/dto/example.dto';

export interface ICreateExampleService {
  execute(data: CreateExampleDto): Promise<ExampleDto>;
}
