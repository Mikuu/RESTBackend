import { Controller, Get } from '@nestjs/common';

@Controller("")
export class AppController {

  @Get("health")
  getHello(): object {
    return { message: "Service is alive" };
  }
}
