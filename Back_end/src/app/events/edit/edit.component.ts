import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  itemId!: number;
  public editform!: FormGroup;
  public user: any = [];
  eventId!: number;
  // Define variables for your form fields
  @ViewChild('fileInput') fileInput!: ElementRef;
  event_created: any;

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private fb: FormBuilder
  ) {
    this.editform = fb.group({
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
      user_id: ['', [Validators.required]],
      remember_token: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    // Retrieve the item ID from the query parameter
    this.route.queryParams.subscribe((params) => {
      this.itemId = params['id'];
      // Fetch the item data based on the ID and fill the form fields
      this.fetchEventById(this.itemId);
      console.log(this.dataObj);
    });
  }
  dataObj: any;
  fetchEventById(eventId: number) {
    this.eventId = eventId;
    this.auth.getEventById(eventId).subscribe(
      (event: any) => {
        this.dataObj = event;
        this.editform.patchValue(this.dataObj);
        // this.editform.patchValue({
        //   event_title: event.event_title,
        //   event_description: event.event_description,
        //   event_badge: event.event_badge,
        //   event_ticket: event.event_ticket,
        //   waiting_list: event.waiting_list,
        //   event_status: event.event_status,
        //   user_id: event.user_id,
        //   remember_token: event.remember_token,
        //   event_created: event.event_created,
        //   event_image: event.event_image,
        //   start_date:dateString,
        //   end_date: dateString,
        // });
      },
      (error: any) => {
        debugger;
        console.error(error);
      }
    );
  }

  private formatDate(date: any) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  onSubmit() {
    const data = {
      event_title: this.editform.value.event_title,
      event_description: this.editform.value.event_description,
      event_image: this.editform.value.event_image,
      event_created: this.editform.value.event_created,
      start_date: this.editform.value.start_date,
      end_date: this.editform.value.end_date,
      event_badge: this.editform.value.event_badge,
      event_ticket: this.editform.value.event_ticket,
      waiting_list: this.editform.value.waiting_list,
      event_status: this.editform.value.event_status,
      user_id: this.editform.value.user_id,
      remember_token: this.editform.value.remember_token,
    };
    console.log(data);
    debugger;
    // Perform the update API call
    this.auth.updateEvent(this.eventId).subscribe(
      (res: any) => {
        this.user = res.data;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
