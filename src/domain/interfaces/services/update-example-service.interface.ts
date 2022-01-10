import { UpdateExampleDto } from 'src/application/example/dto/update-example.dto';

export interface IUpdateExampleService {
  execute(id: string, updateExampleDto: UpdateExampleDto): Promise<void>;
}
