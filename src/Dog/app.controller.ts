
import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserData } from './dog.schema';

@Controller('Meals')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("/:id")
  async findAll(@Param('id') id): Promise<any> {
    return this.appService.getData(id);
    
  }
}
