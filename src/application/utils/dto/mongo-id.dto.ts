import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';

export class MongoIdDto {
  @IsMongoId()
  @ApiProperty({
    description: 'A identification',
    example: '61db8902db3778965ec4a9ab',
  })
  id: string;
}
