import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppBookController } from './controller/app.book.controller';
import { AppController } from "./controller/app.controller";
import { AppBookService } from './service/app.book.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:28008/restabase')],
  controllers: [AppController, AppBookController],
  providers: [AppBookService],
})
export class AppModule {}
