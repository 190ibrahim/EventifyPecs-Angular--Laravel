import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  public formg!: FormGroup;
  public user: any = [];
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.formg = fb.group({
      event_title: ['', [Validators.required]],
      event_description: ['', [Validators.required]],
      event_image: ['', [Validators.required]],
      event_created: ['', [Validators.required]],
      start_date: ['', [Validators.required]],
      end_date: ['', [Validators.required]],
      event_badge: ['', [Validators.required]],
      event_ticket: ['', [Validators.required]],
      waiting_list: ['', [Validators.required]],
      event_status: ['', [Validators.required]],
      price: ['', [Validators.required]],
      // remember_token: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {}
  onSubmit() {
    let data = {
      // user_id: localStorage.getItem('user_id'),
      event_title: this.formg.value.event_title,
      event_description: this.formg.value.event_description,
      event_image: this.formg.value.event_image,
      event_created: this.formg.value.event_created,
      start_date: this.formg.value.start_date,
      end_date: this.formg.value.end_date,
      event_badge: this.formg.value.event_badge,
      event_ticket: this.formg.value.event_ticket,
      waiting_list: this.formg.value.waiting_list,
      event_status: this.formg.value.event_status,
      price: this.formg.value.price,
      // remember_token: this.formg.value.remember_token,
    };
    this.auth.createEvent(data).subscribe(
      (res: any) => {
        this.user = res.data;
        this.formg.reset();
        this.router.navigate(['eventList']);
        this.snackBar.open('event created successfully', 'Close', {
          duration: 3000,
        });
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
