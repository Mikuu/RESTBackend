import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from "../schemas/book.schema";
import { CreateBookDto } from "../dto/create-book.dto";
import {bookUuid} from "../../utils/uuid-utils";

@Injectable()
export class AppBookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const book = new Book();
    book.bid = bookUuid();
    book.title = createBookDto.title;
    book.author = createBookDto.author;
    book.price = createBookDto.price;
    book.publishedAt = createBookDto.publishedAt;
    const createdBook = new this.bookModel(book);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }
}
