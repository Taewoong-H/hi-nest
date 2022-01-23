import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [MoviesController], //url을 가져오고, 함수를 실행함(like router)
  providers: [MoviesService], // 여기에서 함수들을 정의함. 데이터베이스 쿼리도 여기서 다룸
})
export class AppModule {}
