import { Injectable } from '@nestjs/common';
import { DogModel } from './dog.schema';

@Injectable()
export class AppService {
  getHello(): string {
    
    let x = new DogModel({ 'name': 'sdsd'})
    x.save();
    return 'Hello World!';
  }
}
