import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AgendaTaskComponent } from './agenda-task/agenda-task.component';
import { DialogAddTaskComponent } from './dialog-add-task/dialog-add-task.component';
import { TasksComponent } from './tasks/tasks.component';

import { MAT_DATE_LOCALE } from '@angular/material/core';

import { MaterialModule } from './material.module';
import { CoreModule } from './core';
import { AgendaTaskDataComponent } from './agenda-task-data/agenda-task-data.component';

@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    NotFoundComponent,
    AgendaTaskComponent,
    DialogAddTaskComponent,
    TasksComponent,
    AgendaTaskDataComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-br' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
