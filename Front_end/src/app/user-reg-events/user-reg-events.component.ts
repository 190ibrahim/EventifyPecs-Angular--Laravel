import { Component } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-user-reg-events',
  templateUrl: './user-reg-events.component.html',
  styleUrls: ['./user-reg-events.component.scss'],
})
export class UserRegEventsComponent {
  // calendarVisible = true;
  // calendarOptions: CalendarOptions = {
  //   plugins: [
  //     interactionPlugin,
  //     dayGridPlugin,
  //     timeGridPlugin,
  //     listPlugin,
  //   ],
  //   headerToolbar: {
  //     left: 'prev,next today',
  //     center: 'title',
  //     right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  //   },
  //   initialView: 'dayGridMonth',
  //   selectable: true,
  //   selectMirror: true,
  //   dayMaxEvents: true,
  //   events: []
  // };
  public events!: any[];
  notfound = false;
  constructor(private eventService: AuthService) {}

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {
    this.eventService.getRegEvents().subscribe(
      (res: any) => {
        this.events = res.events;
        debugger;
        if (this.events.length < 1) {
          this.notfound = true;
        } else {
          this.notfound = false;
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

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
