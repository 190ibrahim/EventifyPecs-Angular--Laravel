import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventsCalenderComponent } from './events-calender/events-calender.component';
import { EditComponent } from './edit/edit.component';
import { AdminAuthGuard } from '../admin-auth.guard';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'eventList', pathMatch: 'full' },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {
        path: 'create',
        component: EventsComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: 'eventList',
        component: EventListComponent,
      },
      {
        path: 'eventsCalender',
        component: EventsCalenderComponent,
        canActivate: [AdminAuthGuard],
      },
      { path: 'edit/:id', component: EditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
