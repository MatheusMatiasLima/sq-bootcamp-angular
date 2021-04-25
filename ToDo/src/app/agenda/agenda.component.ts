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

  ngOnInit() {
    this.taskService.onUpdateTasks().subscribe(() => {
      this.init();
    });

    this.init();
  }

  private init() {
    this.listAllTasks();
    this.listTasksForToday();
    this.listTasksForTomorrow();
    this.listUpcomingTasks();
  }

  listAllTasks() {
    this.taskService
      .listAllTask()
      .subscribe((response) => (this.todos = response));
  }

  listTasksForToday() {
    this.taskService
      .listTasksForToday()
      .subscribe((response) => (this.todosForToday = response));
  }

  listTasksForTomorrow() {
    this.taskService
      .listTasksForTomorrow()
      .subscribe((response) => (this.todosForTomorrow = response));
  }

  listUpcomingTasks() {
    this.taskService
      .listUpcomingTasks()
      .subscribe((response) => (this.todosUpcoming = response));
  }
}
