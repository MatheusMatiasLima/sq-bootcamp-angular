import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services';
import { Task } from '../services/models';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  todos: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.onUpdateTasks().subscribe(() => {
      this.init();
    });

    this.init();
  }

  // tslint:disable-next-line:typedef
  private init() {
    this.listAllTasks();
  }

    // tslint:disable-next-line:typedef
    listAllTasks() {
      this.taskService
        .listAllTask()
        .subscribe((response) => (this.todos = response));
    }

}
