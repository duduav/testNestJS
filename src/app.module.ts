import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { AppController } from './Dog/app.controller';
import { AppService } from './Dog/app.service';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGOOSE),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
