import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class UuidDto {
  @IsUUID()
  @ApiProperty({
    description: 'A identification',
    example: '06923c84-1497-4f46-b720-75c54623508a',
  })
  id: string;
}
