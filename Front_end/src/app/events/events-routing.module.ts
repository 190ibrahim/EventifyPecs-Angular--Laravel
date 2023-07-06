import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventsCalenderComponent } from './events-calender/events-calender.component';

const routes: Routes = [
  {
    path: 'create',
    component: EventsComponent
  },
  {
    path: 'eventList',
    component: EventListComponent
  },
  {
    path: 'eventsCalender',
    component: EventsCalenderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
