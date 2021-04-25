import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddTaskComponent } from './dialog-add-task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .toolbar-spacer {
        flex: 1 1 auto;
      }

      .container {
        padding: 15px 10px 15px 10px;
      }
    `,
  ],
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogAddTaskComponent, {
      minWidth: '50%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
