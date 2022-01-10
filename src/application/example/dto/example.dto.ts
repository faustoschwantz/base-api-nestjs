import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { MongoIdDto } from 'src/application/utils/dto/mongo-id.dto';

export class ExampleDto extends PickType(MongoIdDto, ['id'] as const) {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty({
    description: 'A example description',
    example: 'A description',
    maxLength: 100,
  })
  description: string;

  @IsBoolean()
  @ApiProperty({
    description: 'If it is active',
    example: true,
  })
  enable: boolean;
}
