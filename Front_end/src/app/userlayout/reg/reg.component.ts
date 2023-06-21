import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss'],
})
export class RegComponent {
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

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
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
