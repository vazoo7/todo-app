import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo-service.service';

describe('TodoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit('should be created', () => {
    const service: TodoService = TestBed.get(TodoService);
    expect(service).toBeTruthy();
  });
});
