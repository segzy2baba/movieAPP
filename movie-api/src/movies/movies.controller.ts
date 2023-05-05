import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import {CreateMovieDto, GetMoviesFilterDto} from './dto';
import { Movie } from '@prisma/client';


@Controller('movies')
export class MoviesController {
    constructor(
        private moviesService: MoviesService,
 ){}

 @Get()
 getMovies(@Query('title') title?: string, @Query('genre') genre?: string)  {
  // getMovies(@Query() query: GetMoviesFilterDto)  {
  //   console.log(query)
   return this.moviesService.getMovies(title, genre) 
  //  return FilterData; 
 }


 @Post()
 createMovie(
   @Body() dto: CreateMovieDto
 ): Promise<Movie> {
   return this.moviesService.createMovie(
     dto,
   );
 }

 @Get(':id')
  getBookmarkById(
    @Param('id', ParseIntPipe) movieId: number,
  ): Promise<Movie> {
    return this.moviesService.getMovieId(
      movieId,
    );
  }

}
