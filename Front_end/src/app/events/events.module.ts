import { NgModule } from '@angulargit /core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventsCalenderComponent } from './events-calender/events-calender.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';




@NgModule({
  declarations: [
    EventsComponent,
    EventListComponent,
    EventsCalenderComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FullCalendarModule
  ]
})
export class EventsModule { }
