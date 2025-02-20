import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateNoteDto {
  @ApiProperty({
    example: 'My First Note',
    description: 'The title of the note',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiPropertyOptional({
    example: 'This is a test note.',
    description: 'The description of the note',
  })
  @IsOptional()
  @IsString()
  description?: string;
}
