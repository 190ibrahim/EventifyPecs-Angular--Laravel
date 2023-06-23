import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
@Component({
  selector: 'app-events-calender',
  templateUrl: './events-calender.component.html',
  styleUrls: ['./events-calender.component.css']
})
export class EventsCalenderComponent {
  calendarVisible = true;
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
    events: [
      { title: 'Event 1', date: '2023-06-19' },
        { title: 'Event 2', date: '2023-06-20' },
    ]
  };
  // constructor(private http: HttpClient) {}
  // ngOnInit() {
  //   this.fetchEvents();
  // }

  // fetchEvents() {
  //   this.http.get<any[]>('/api/events').subscribe((events) => {
  //     this.calendarOptions.events = events;
  //   });
  // }

  // handleEventClick(clickInfo: EventClickArg) {
  //   console.log('Event clicked:', clickInfo.event);
  // }
  //   handleEvents(events: EventApi[]) {
  //   this.currentEvents = events;
  //   this.changeDetector.detectChanges();
  // }
}
