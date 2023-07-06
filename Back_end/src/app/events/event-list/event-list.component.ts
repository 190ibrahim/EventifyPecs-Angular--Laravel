import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  /**
   *
   */
  constructor(private auth:AuthService, private router: Router) {
  }
url: string = "../assets/img1.jpg";
public isAdmin:any;
public events:any = []
    imageChange(event: any){
        this.url = event.target.src;
    }
    ngOnInit(): void {
        this.getEvents();
        this.isAdmin = localStorage.getItem('admin')
    }
    getEvents(){
      this.auth.getEvents().subscribe((res:any)=>{
        this.events = res
         console.log(this.events);
        
      },(err:any)=>{

      })
    }
    edit(item:any){
      this.router.navigate(['events/edit/'+item.id], { queryParams: { id: item.id } });
    }
    del(item:any){
      this.auth.deleteEvent(item.id).subscribe((res:any)=>{
        alert('deleted successfully')
        this.getEvents();
      },(err:any)=>{
        console.log('error in deleting');
      })
    }

    registerEvent(event: any): void {
      this.auth.registerEvent(event).subscribe(
        (response:any) => {
          // Handle the success response, e.g., show a success message
          console.log('Event registered successfully');
          this.router.navigate(['eventList'])
        },
        (error:any) => {
          // Handle the error response, e.g., show an error message
          console.error('Failed to register event:', error);
        }
      );
    }
    
}
