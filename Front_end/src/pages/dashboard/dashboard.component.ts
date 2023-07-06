import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  innerWidth: any;
  formOpenBtn: any;

  public events: any = [];
  public eventsCount: number = 0;

  public user: any = [];
  public submitted: boolean = false;
  public invalidCreate: boolean = false;

  constructor(private router : Router, private elementRef: ElementRef,private auth: AuthService,) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.getEvents();
    this.updateEventCount();
  }

  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.innerWidth = window.innerWidth;
  }
  getClass() {
    return this.innerWidth < 925? ' row-md' : 'row';
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


  public createEventForm = new FormGroup({
    event_title: new FormControl('', [Validators.required]),
    event_description: new FormControl('', [Validators.required]),
    start_date: new FormControl('', [Validators.required]),
    end_date: new FormControl('', [Validators.required]),
    event_location: new FormControl('', [Validators.required]),
    event_price: new FormControl('', [Validators.required]),
    event_ticket: new FormControl('', [Validators.required]),
    // cat_id: new FormControl('', [Validators.required]),
  });

  public onSubmit() {
      this.invalidCreate = false;
      this.submitted = true;

const data = {
  event_title: this.createEventForm.controls['event_title'].value,
  event_description: this.createEventForm.controls['event_description'].value,
  // event_image: this.createEventForm.controls['event_image'].value,
  event_location: this.createEventForm.controls['event_location'].value,
  event_price: this.createEventForm.controls['event_price'].value,
  event_ticket: this.createEventForm.controls['event_ticket'].value,
  start_date: this.createEventForm.controls['start_date'].value,
  end_date: this.createEventForm.controls['end_date'].value,
  // cat_id: this.createEventForm.controls['cat_id'].value
};

// You can then use the `data` object to perform your desired actions, such as updating the event.



    this.auth.createEvent(data).subscribe(
      (res: any) => {
        this.user = res.data;
        this.createEventForm.reset();
        this.router.navigate(['events/eventsCalender']);
      },
      (err: any) => {
        console.log(err);
        this.invalidCreate =true;
      }
    );
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


  getStatusClass(item: any): string {
  const currentDate = new Date();
  const startDate = new Date(item.start_date);
  const endDate = new Date(item.end_date);

  if (currentDate > endDate) {
    return 'completed';
  } else if (currentDate < startDate) {
    return 'pending';
  } else {
    return 'process';
  }
}

getStatusText(item: any): string {
  const currentDate = new Date();
  const startDate = new Date(item.start_date);
  const endDate = new Date(item.end_date);

  if (currentDate > endDate) {
    return 'Completed';
  } else if (currentDate < startDate) {
    return 'Pending';
  } else {
    return 'Process';
  }
}
updateEventCount(): void {
  this.eventsCount = this.events.length;
}
}






