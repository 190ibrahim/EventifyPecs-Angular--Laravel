import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
url: string = "../assets/img1.jpg";
    imageChange(event: any){
        this.url = event.target.src;
    }
}
