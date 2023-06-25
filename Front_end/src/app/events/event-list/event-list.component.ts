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
  categories: any[] = [];
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
    this.getCategories();
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
  event_location: new FormControl('', [Validators.required]),
  event_price: new FormControl('', [Validators.required]),
  event_ticket: new FormControl('', [Validators.required]),
  start_date: new FormControl('', [Validators.required]),
  end_date: new FormControl('', [Validators.required]),
  cat_id: new FormControl('', [Validators.required]),
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
    event_title: this.editEventForm.controls['event_title'].value,
    event_description: this.editEventForm.controls['event_description'].value,
    event_image: this.editEventForm.controls['event_image'].value,
    event_location: this.editEventForm.controls['event_location'].value,
    event_price: this.editEventForm.controls['event_price'].value,
    event_ticket: this.editEventForm.controls['event_ticket'].value,
    start_date: this.editEventForm.controls['start_date'].value,
    end_date: this.editEventForm.controls['end_date'].value,
    cat_id: this.editEventForm.controls['cat_id'].value,
  };
    console.log(data);
    // Perform the update API call
    this.auth.updateEvent(data).subscribe(
      (res: any) => {
        this.user = res.data;
        this.router.navigate(['']);

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




getCategories() {
  this.auth.getCategories().subscribe(
    (res: any) => {
      this.categories = res;
      console.log(this.categories);

      // Perform additional logic with the categories if needed
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



    getEvents() {
    this.auth.getEvents().subscribe(
      (res: any) => {
        this.events = res;
        console.log(this.events);
        // Fetch registration count for each event
        this.events.forEach((event: any) => {
          this.getRegistrationCount(event.id).subscribe(
            (count) => {
              event.registrationCount = count; // Add registrationCount property to each event
            },
            (error) => {
              console.log(error);
            }
          );
        });
      },
      (err: any) => {}
    );
  }

  getRegistrationCount(eventId: number) {
    return this.auth.getRegistrationCount(eventId);
  }
}
