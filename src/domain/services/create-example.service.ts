import { Injectable } from '@nestjs/common';
import { CreateExampleDto } from 'src/application/example/dto/create-example.dto';

@Injectable()
export class CreateExampleService {
  execute(createExampleDto: CreateExampleDto) {
    console.log(createExampleDto);
    return 'ok';
  }
}
