import {
  Controller,
  Post,
  Body,
  Delete,
  Param,
  Get,
  Put,
} from '@nestjs/common';
import { CreateToDoDto } from './dtos/create-toDo.dto';
import { TodoServiceService } from './todo-service.service';

@Controller('todo')
export class TodoControllerController {
  constructor(private readonly TodoServiceService: TodoServiceService) {}

  @Post()
  create(@Body() createToDoDto: CreateToDoDto) {
    return this.TodoServiceService.createToDoItem(createToDoDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() toDoDto: CreateToDoDto) {
   return this.TodoServiceService.updateTodo(id,toDoDto);
  }

  @Get()
  findAll() {
    return this.TodoServiceService.getAllTodos();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.TodoServiceService.getTodoItem(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.TodoServiceService.deleteToDoItem(id);
    // console.log`This action removes a #${id} todo-item`;
  }
}
