import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../services';
import { Task } from '../services/models';

@Component({
  selector: 'app-agenda-task-data',
  templateUrl: './agenda-task-data.component.html',
  styleUrls: ['./agenda-task-data.component.scss']
})

export class AgendaTaskDataComponent implements OnInit {
  @Input() todos: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {}

  done(done: boolean, task: Task) {
    task.done = done;
    this.taskService.alterTask(task.id, task).subscribe();
  }

  delete(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe();
  }

}
