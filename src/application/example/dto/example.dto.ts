import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';

export class ExampleDto {
  @IsUUID()
  @ApiProperty({
    description: 'A example identification',
    example: '06923c84-1497-4f46-b720-75c54623508a',
  })
  id: string;

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
