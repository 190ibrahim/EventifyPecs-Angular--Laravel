import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventsCalenderComponent } from './events-calender/events-calender.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    EventsComponent,
    EventListComponent,
    EventsCalenderComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FullCalendarModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EventsModule { }
