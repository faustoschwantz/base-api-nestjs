import { CreateExampleDto } from './dto/create-example.dto';
import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ICreateExampleService } from 'src/domain/interfaces/services/create-example-service.interface';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Examples')
@Controller('example')
export class ExampleController {
  constructor(
    @Inject('ICreateExampleService')
    private readonly createExampleService: ICreateExampleService,
  ) {}

  @Post()
  @ApiCreatedResponse({ description: 'Example created' })
  create(@Body() createExampleDto: CreateExampleDto) {
    return this.createExampleService.execute(createExampleDto);
  }
}
