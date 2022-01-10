import { ExampleDto } from 'src/application/example/dto/example.dto';

export interface IFindExampleService {
  execute(id: string): Promise<ExampleDto>;
}
