import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-calender',
  templateUrl: './events-calender.component.html',
  styleUrls: ['./events-calender.component.css']
})
export class EventsCalenderComponent {
  calendarVisible = true;
  public events: any = [];

  calendarOptions: CalendarOptions = {
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    events: []
  };

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.getEvents();
  }

  /**
   * Fetches the events from the server and populates the calendar.
   */
  getEvents(): void {
    this.auth.getEvents().subscribe(
      (res: any) => {
        // Map the response events to the required format for the calendar
        this.events = res.map((event: any) => ({
          title: event.event_title,
          date: event.start_date
        }));

        // Set the events for the calendar options
        this.calendarOptions.events = this.events;

        console.log(this.events);
      },
      (err: any) => {
        // Handle error if necessary
      }
    );
  }
}
