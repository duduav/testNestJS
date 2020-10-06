

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserData } from './dog.schema';

@Controller('Meals')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post( )
  async getHello(@Body() userData: UserData): Promise<any> {
    return this.appService.upsertData(userData);
  }
  @Get("/:id")
  async findAll(@Param('id') id): Promise<any> {
    return this.appService.getData(id);
    
  }
}
