import { Component, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  public user: any = [];

  role_type: any;
  public isAdmin : boolean= false;
  public isUser : boolean= false;


  public submitted: boolean = false;
  public invalidEdit: boolean = false;

  dataObj: any;
  eventId!: number;
  event_created: any;
  constructor(private router : Router, private elementRef: ElementRef,private auth: AuthService,) { }


  imageChange(event: any){
      this.url = event.target.src;
  }

  ngOnInit(): void {
    this.getEvents();
    this.role_type = localStorage.getItem('role_type');
    console.log(this.role_type);
    if (this.role_type==='admin') {
      this.isAdmin = true;
    } else if (this.role_type==='user'){
      this.isUser = true;
    }
  }


  handleFormOpenClick(): void {
    const home = this.elementRef.nativeElement.querySelector(".home");
    home.classList.add("show");
    home.classList.toggle("active");
  }

  handleFormCloseClick(): void {
    const home = this.elementRef.nativeElement.querySelector(".home");
    home.classList.remove("show");
  }


  public editEventForm = new FormGroup({
    event_title: new FormControl('', [Validators.required]),
    event_description: new FormControl('', [Validators.required]),
    event_image: new FormControl('', [Validators.required]),
    event_created: new FormControl('', [Validators.required]),
    start_date: new FormControl('', [Validators.required]),
    end_date: new FormControl('', [Validators.required]),
    event_badge: new FormControl('', [Validators.required]),
    event_ticket: new FormControl('', [Validators.required]),
    waiting_list: new FormControl('', [Validators.required]),
    event_status: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    // remember_token: new FormControl('', [Validators.required]),
  });


  fetchEventById(eventId: number) {
    this.eventId = eventId;
    this.auth.getEventById(eventId).subscribe(
      (editedEvent: any) => {
        this.dataObj = editedEvent;
        this.editEventForm.patchValue(this.dataObj);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }




registerEvent(item: any): void {
  const user_id = Number(localStorage.getItem('user_id'));
  const event_id = item.id;

  this.auth.registerEvent(user_id, event_id).subscribe(
    (res: any) => {
      console.log('Event registered successfully');
    },
    (err: any) => {
      console.error('Failed to register event:', err);
    }
  );
}




  public onSubmit() {
    this.invalidEdit = false;
    this.submitted = true;

    const data = {
      // user_id: localStorage.getItem('user_id'),
      event_title: this.editEventForm.controls['event_title'].value,
      event_description: this.editEventForm.controls['event_description'].value,
      event_image: this.editEventForm.controls['event_image'].value,
      event_created: this.editEventForm.controls['event_created'].value,
      start_date: this.editEventForm.controls['start_date'].value,
      end_date: this.editEventForm.controls['end_date'].value,
      event_badge: this.editEventForm.controls['event_badge'].value,
      event_ticket: this.editEventForm.controls['event_ticket'].value,
      waiting_list: this.editEventForm.controls['waiting_list'].value,
      event_status: this.editEventForm.controls['event_status'].value,
    price: this.editEventForm.controls['price'].value,
      // remember_token: this.editEventForm.controls['remember_token'].value,

    };
    console.log(data);
    // Perform the update API call
    this.auth.updateEvent(data).subscribe(
      (res: any) => {
        this.user = res.data;
        this.router.navigate(['events/layout/eventList']);

      },
      (err: any) => {
        console.log(err);
      }
    );
  }


  edit(item: any) {
    this.fetchEventById(item.id);
    this.handleFormOpenClick();
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

  del(item: any) {
    this.auth.deleteEvent(item.id).subscribe(
      (res: any) => {
        this.getEvents();
      },
      (err: any) => {
        console.log('error in deleting');
      }
    );
  }
}
