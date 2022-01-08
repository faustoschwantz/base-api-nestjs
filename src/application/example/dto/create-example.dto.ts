import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateExampleDto {
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
