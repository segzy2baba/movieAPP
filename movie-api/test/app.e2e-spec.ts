import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../src/prisma/prisma.service';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { CreateMovieDto } from 'src/movies/dto';
// import { CreateMovieDto } from './dto';
// 4 import { Movie } from '@prisma/client';


describe('AppController (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
    await app.listen(8800);

    prisma = app.get(PrismaService);
  });
  afterEach(async () => {
    await app.close();
  });

  describe('GET /movies', () => {
    it('should return an array of movies', async () => {
      const res = await request(app.getHttpServer())
        .get('/movies')
        .expect(200);

      expect(res.body).toBeInstanceOf(Array);
    });
  });




  describe('POST /movies', () => {
    const createPayload: CreateMovieDto = {
      title: 'Tears of Steel',
      genre: "Action",
      thumbnailUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
      description: 'A lonely young woman, Sintel, searches for a baby dragon she adopts, but soon learns that it has been stolen.'
    };


    it('should create a movie', async () => {
      const res = await request(app.getHttpServer())
        .post('/movies')
        .send(createPayload)
        .expect(201);

      expect(res.body.title).toEqual(createPayload.title);
      expect(res.body.genre).toEqual(createPayload.genre);
      expect(res.body.description).toEqual(createPayload.description);
      expect(res.body.thumbnailUrl).toEqual(createPayload.thumbnailUrl);
    });
  });


  // describe('GET /movies/:id', () => {
  //    let movieid = 1
  //   const createPayload = {
  //     id: 1,
  //     title: 'Tears of Steel',
  //     genre: "Action",
  //     thumbnailUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
  //     description: 'A lonely young woman, Sintel, searches for a baby dragon she adopts, but soon learns that it has been stolen.'
  //   };


  //   it('should create a movie', async () => {
  //     const res = await request(app.getHttpServer())
  //       .post(`/movies/${movieid}`)
  //       .send(createPayload)
       

  //     expect(res.body.title).toEqual(createPayload.title);
  //     expect(res.body.genre).toEqual(createPayload.genre);
  //     expect(res.body.description).toEqual(createPayload.description);
  //     expect(res.body.thumbnailUrl).toEqual(createPayload.thumbnailUrl);
  //   });
  // });


  



});
