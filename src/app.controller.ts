import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { sendHttpException } from './exception/exception';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    sendHttpException("ddd");
    return this.appService.getHello();
  }
}
