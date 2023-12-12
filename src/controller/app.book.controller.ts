import {Controller, Delete, Get, Post, Put} from '@nestjs/common';
import { AppBookService } from '../service/app.book.service';

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
  createBook(): object {
    return {}
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
