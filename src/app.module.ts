import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoControllerController } from './todo/todo-controller.controller';
import { TodoModuleModule } from './todo/todo-module.module';
import { TodoServiceService } from './todo/todo-service.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Raluca:passmongoDB@cluster0-k2p6a.mongodb.net/test?retryWrites=true&w=majority',
    ),
    TodoModuleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
