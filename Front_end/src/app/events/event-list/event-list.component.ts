import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {

  url: string = "../assets/img1.jpg";

  public events: any = [];
  public isAdmin: any;



  constructor( private auth: AuthService, private router: Router, ) {}


  imageChange(event: any){
      this.url = event.target.src;
  }

  ngOnInit(): void {
    this.getEvents();
    this.isAdmin = localStorage.getItem('admin');
  }

  getEvents() {
    this.auth.getEvents().subscribe(
      (res: any) => {
        this.events = res;
        console.log(this.events);
      },
      (err: any) => {}
    );
  }


  registerEvent(event: any): void {
  event.user_id = localStorage.getItem('user_id');
  this.auth.registerEvent(event).subscribe(
    (res: any) => {
      console.log('Event registered successfully');
    },
    (err: any) => {
      console.error('Failed to register event:', err);
    }
  );
}

}
