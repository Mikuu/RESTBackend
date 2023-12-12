import { Test, TestingModule } from '@nestjs/testing';
import { AppBookController } from './app.book.controller';
import { AppBookService } from '../service/app.book.service';

describe('AppController', () => {
  let appController: AppBookController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppBookController],
      providers: [AppBookService],
    }).compile();

    appController = app.get<AppBookController>(AppBookController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getBook()).toBe({});
    });
  });
});
