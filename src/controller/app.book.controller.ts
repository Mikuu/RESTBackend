import {Body, Controller, Delete, Get, Post, Put} from '@nestjs/common';
import { AppBookService } from '../service/app.book.service';
import {CreateBookDto} from "../dto/create-book.dto";

@Controller("books")
export class AppBookController {
  constructor(private readonly appBookService: AppBookService) {}

  @Get("book")
  getBook(): object {
    return {}
  }

  @Get()
  getBooks(): object {
    return this.appBookService.findAll();
  }

  @Post("book")
  createBook(@Body() createBookDto: CreateBookDto) {
    return this.appBookService.create(createBookDto);
  }

  @Put("book")
  updateBook(): object {
    return {}
  }

  @Delete("book")
  deleteBook(): object {
    return {}
  }
}
