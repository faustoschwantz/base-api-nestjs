import { ExampleDto } from 'src/application/example/dto/example.dto';

export interface IFindAllExampleService {
  execute(): Promise<ExampleDto[]>;
}
