import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
  const mongoose = require('mongoose');
    mongoose.connect(process.env.MONGOOSE,{ useNewUrlParser:
    true })
    
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
