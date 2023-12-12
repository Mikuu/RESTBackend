import { Module } from '@nestjs/common';
import { AppBookController } from './controller/app.book.controller';
import { AppController } from "./controller/app.controller";
import { AppBookService } from './service/app.book.service';

@Module({
  imports: [],
  controllers: [AppController, AppBookController],
  providers: [AppBookService],
})
export class AppModule {}
