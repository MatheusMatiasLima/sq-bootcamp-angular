import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services';
import { Task } from '../services/models';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements OnInit {
  todos: Task[] = [];
  todosForToday: Task[] = [];
  todosForTomorrow: Task[] = [];
  todosUpcoming: Task[] = [];

  constructor(private taskService: TaskService) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.taskService.onUpdateTasks().subscribe(() => {
      this.init();
    });

    this.init();
  }

  // tslint:disable-next-line:typedef
  private init() {
    this.listAllTasks();
    this.listTasksForToday();
    this.listTasksForTomorrow();
    this.listUpcomingTasks();
  }

  // tslint:disable-next-line:typedef
  listAllTasks() {
    this.taskService
      .listAllTask()
      .subscribe((response) => (this.todos = response));
  }

  // tslint:disable-next-line:typedef
  listTasksForToday() {
    this.taskService
      .listTasksForToday()
      .subscribe((response) => (this.todosForToday = response));
  }

  // tslint:disable-next-line:typedef
  listTasksForTomorrow() {
    this.taskService
      .listTasksForTomorrow()
      .subscribe((response) => (this.todosForTomorrow = response));
  }

  // tslint:disable-next-line:typedef
  listUpcomingTasks() {
    this.taskService
      .listUpcomingTasks()
      .subscribe((response) => (this.todosUpcoming = response));
  }
}
