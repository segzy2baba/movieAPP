import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMovieDto } from './dto';
import { Movie } from '@prisma/client';


@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

   async getMovies(title?: string, genre?: string): Promise<Movie[]> {
    try {
      const where: any = {};
      if (title) {
        where.title = { contains: title, mode: 'insensitive' };
      }
      if (genre) {
        where.genre = { contains: genre, mode: 'insensitive' };
      }
      const movies = await this.prisma.movie.findMany({
        where,
      });
      return movies;
    } catch (error) {
      throw new NotFoundException('Could not find movies');
    }
  }



      async createMovie(dto: CreateMovieDto): Promise<Movie> {
        const { title, description, genre,  thumbnailUrl } = dto;
        const movie = await this.prisma.movie.create({
          data: {
            title,
            description: description || '', // optional property must be set to a default value
            genre,
            thumbnailUrl: thumbnailUrl || '',
          },
        });
        return movie;
      }
      
      

      async getMovieId(
        movieId: number,
      ): Promise<Movie> {
        const movie = await this.prisma.movie.findFirst({
          where: {
            id: movieId,
          },
        });

        if (!movie) {
          throw new NotFoundException(`Movie with ID '${movieId}' `);
         
        }

        return movie 
      }
}
