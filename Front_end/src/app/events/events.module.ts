import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventsCalenderComponent } from './events-calender/events-calender.component';
// import { FullCalendarModule } from '@fullcalendar/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LayoutComponent } from './layout/layout.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { HeaderComponent } from '../header/header.component';
import { SublevelMenuComponent } from '../sidenav/sublevel-menu.component';
import { BodyComponent } from '../body/body.component';

@NgModule({
  declarations: [
    EventsComponent,
    EventListComponent,
    EventsCalenderComponent,
    EditComponent,
    LayoutComponent,
    SidenavComponent,
    HeaderComponent,
    SublevelMenuComponent,
    BodyComponent,

  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    // FullCalendarModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  exports:[
    HeaderComponent
  ]
})
export class EventsModule {}
