import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './../todo-list/todo-list.component';
import { TodoFormComponent } from './../todo-form/todo-form.component';
import { NotificationService } from 'src/app/notification.service';
import { Todo } from './../models/Todo';
import { TodoService } from './../todo-service.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoComponent } from './todo.component';
import { of } from 'rxjs';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  const mockTodoService = {
    createTodo: () => {
      of(true)
    },
    getAllTodos: () => {
      const mockTodos = [
        new Todo({
          "label": "Test 1",
          "description": "Test 1",
          "category": "Home",
          "done": true,
          "id": 1
        }),
        new Todo({
          "label": "Test 2",
          "description": "Test 2",
          "category": "Home",
          "done": false,
          "id": 2
        }),
        new Todo({
          "label": "Test 3",
          "description": "Test 3",
          "category": "Home",
          "done": false,
          "id": 3
        })
      ]
      return mockTodos;
    },
    deleteTodo: () => {
      of(true)
    }
  }
  let testMockTodoService;
  let testMockNotificationService;


  beforeEach(async(() => {
    testMockTodoService = jasmine.createSpyObj(['getAllTodos', 'createTodos', 'deleteTodo']);
    testMockNotificationService = jasmine.createSpyObj(['notify'])

    TestBed.configureTestingModule({
      declarations: [ TodoComponent, TodoFormComponent, TodoListComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        { provide: TodoService, useValue: testMockTodoService},
        { provide: NotificationService, useValue: testMockNotificationService},
        FormBuilder
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
