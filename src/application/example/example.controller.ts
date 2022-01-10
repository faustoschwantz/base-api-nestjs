import { CreateExampleDto } from './dto/create-example.dto';
import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ICreateExampleService } from 'src/domain/interfaces/services/create-example-service.interface';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ExampleDto } from './dto/example.dto';

@ApiTags('Examples')
@Controller('example')
export class ExampleController {
  constructor(
    @Inject('ICreateExampleService')
    private readonly createExampleService: ICreateExampleService,
  ) {}

  @Post()
  @ApiCreatedResponse({ description: 'Example created', type: ExampleDto })
  create(@Body() createExampleDto: CreateExampleDto): Promise<ExampleDto> {
    return this.createExampleService.execute(createExampleDto);
  }
}
