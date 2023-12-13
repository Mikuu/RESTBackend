import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppBookController } from './controller/app.book.controller';
import { AppController } from "./controller/app.controller";
import { AppBookService } from './service/app.book.service';
import {Book, BookSchema} from "./schemas/book.schema";

@Module({
  imports: [
      MongooseModule.forRoot(`mongodb://${process.env.RESTABASE_USERNAME}:${process.env.RESTABASE_PASSWORD}@localhost:28008/restabase`),
      MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }])
  ],
  controllers: [AppController, AppBookController],
  providers: [AppBookService],
})
export class AppModule {}

