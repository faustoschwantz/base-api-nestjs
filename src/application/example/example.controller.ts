import { CreateExampleDto } from './dto/create-example.dto';
import { Body, Controller, Inject, Param, Patch, Post } from '@nestjs/common';
import { ICreateExampleService } from 'src/domain/interfaces/services/create-example-service.interface';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ExampleDto } from './dto/example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
import { MongoIdDto } from '../utils/dto/mongo-id.dto';
import { IUpdateExampleService } from 'src/domain/interfaces/services/update-example-service.interface';

@ApiTags('Examples')
@Controller('example')
export class ExampleController {
  constructor(
    @Inject('ICreateExampleService')
    private readonly createExampleService: ICreateExampleService,
    @Inject('IUpdateExampleService')
    private readonly updateExampleService: IUpdateExampleService,
  ) {}

  @Post()
  @ApiCreatedResponse({ description: 'Example created', type: ExampleDto })
  create(@Body() createExampleDto: CreateExampleDto): Promise<ExampleDto> {
    return this.createExampleService.execute(createExampleDto);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Updated example' })
  @ApiNotFoundResponse({ description: 'Not found example' })
  async update(
    @Param() { id }: MongoIdDto,
    @Body() updateExample: UpdateExampleDto,
  ): Promise<void> {
    await this.updateExampleService.execute(id, updateExample);
  }
}
