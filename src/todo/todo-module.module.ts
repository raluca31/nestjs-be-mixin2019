import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { toDoSchema } from './schemas/toDo.schema';
import { TodoControllerController } from './todo-controller.controller';
import { TodoServiceService } from './todo-service.service';


@Module({
    imports: [MongooseModule.forFeature([{name:"ToDo", schema: toDoSchema}])],
    controllers: [TodoControllerController],
    providers: [TodoServiceService]
})
export class TodoModuleModule {}
