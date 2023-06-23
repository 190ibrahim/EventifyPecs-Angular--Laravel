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


  public user: any = [];
  public submitted: boolean = false;
  public invalidCreate: boolean = false;

  constructor(private router : Router, private elementRef: ElementRef,private auth: AuthService,) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
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

  public onSubmit() {
      this.invalidCreate = false;
      this.submitted = true;

      const data = {
        // user_id: localStorage.getItem('user_id'),
        event_title: this.createEventForm.controls['event_title'].value,
        event_description: this.createEventForm.controls['event_description'].value,
        event_image: this.createEventForm.controls['event_image'].value,
        event_created: this.createEventForm.controls['event_created'].value,
        start_date: this.createEventForm.controls['start_date'].value,
        end_date: this.createEventForm.controls['end_date'].value,
        event_badge: this.createEventForm.controls['event_badge'].value,
        event_ticket: this.createEventForm.controls['event_ticket'].value,
        waiting_list: this.createEventForm.controls['waiting_list'].value,
        event_status: this.createEventForm.controls['event_status'].value,
        price: this.createEventForm.controls['price'].value,
        // remember_token: this.createEventForm.controls['remember_token'].value,

      };

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


}






