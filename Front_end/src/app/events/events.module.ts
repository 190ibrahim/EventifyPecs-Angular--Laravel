import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventsCalenderComponent } from './events-calender/events-calender.component';


@NgModule({
  declarations: [
    EventsComponent,
    EventListComponent,
    EventsCalenderComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
