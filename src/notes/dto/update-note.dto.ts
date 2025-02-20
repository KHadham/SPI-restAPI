import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateNoteDto {
  @ApiPropertyOptional({
    example: 'Updated Title',
    description: 'The updated title of the note',
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({
    example: 'Updated Description',
    description: 'The updated description of the note',
  })
  @IsOptional()
  @IsString()
  description?: string;
}
