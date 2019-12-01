import { Injectable } from '@nestjs/common';
import { CreateToDoDto } from './dtos/create-toDo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ToDo } from './interfaces/toDo.interface';

@Injectable()
export class TodoServiceService {
  constructor(@InjectModel('ToDo') private readonly toDoModel: Model<ToDo>) {}

  async createToDoItem(createToDoItem: CreateToDoDto): Promise<string> {
    const newTodo = this.toDoModel(createToDoItem);
    const result = await newTodo.save();
    return result.id;
    //console.log(`Hello from service: ${createToDoItem.checked}`);
  }

  async updateTodo(id: string, toDo: ToDo) {
    return await this.toDoModel.findOneAndUpdate({ _id: id }, toDo);
  }
  async getTodoItem(id: string): Promise<ToDo> {
    return await this.toDoModel.findById(id);
  }

  async getAllTodos(): Promise<ToDo> {
    return await this.toDoModel.find();
  }

  async deleteToDoItem(id: string) {
    return await this.toDoModel.deleteOne({ _id: id });
    //console.log`Item with id ${id} was successfully deleted`;
  }
}
