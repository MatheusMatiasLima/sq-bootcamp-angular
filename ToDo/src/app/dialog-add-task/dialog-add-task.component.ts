import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services';
import { Task } from '../services/models';

@Component({
  selector: 'app-dialog-add-task',
  templateUrl: './dialog-add-task.component.html',
  styleUrls: ['./dialog-add-task.component.scss'],
})
export class DialogAddTaskComponent implements OnInit {
  title!: string;
  notes!: string;
  remindMe!: Date;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  addTask() {
    const task = new Task(this.title, this.notes, this.remindMe);
    this.taskService.createTask(task).subscribe();
  }

  myFilter = (d: Date | null): boolean => {
    const date = (d || new Date()).setHours(0, 0, 0, 0);
    const today = new Date().setHours(0, 0, 0, 0);
    return date >= today;
  }
}
