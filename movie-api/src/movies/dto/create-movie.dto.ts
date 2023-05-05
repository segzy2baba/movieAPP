import {
    IsNotEmpty,
    IsOptional,
    IsString,
  } from 'class-validator';
  
  export class CreateMovieDto {
    @IsString()
    @IsNotEmpty()
    title: string;
  
    @IsString()
    @IsOptional()
    description?: string;
  
    @IsString()
    @IsNotEmpty()
    genre: string;

    @IsString()
    @IsOptional()
    thumbnailUrl: string;
  }