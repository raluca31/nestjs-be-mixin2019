import { Test, TestingModule } from '@nestjs/testing';
import { TodoControllerController } from './todo-controller.controller';

describe('TodoController Controller', () => {
  let controller: TodoControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoControllerController],
    }).compile();

    controller = module.get<TodoControllerController>(TodoControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
