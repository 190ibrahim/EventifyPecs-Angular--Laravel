import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public formg!: FormGroup;
  public user: any = [];
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.formg = fb.group({
      // name:['',[Validators.required]],
      // username:['',[Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {}
  onSubmit() {
    let data = {
      // name:this.formg.value.name,
      // username:this.formg.value.username,
      email: this.formg.value.email,
      password: this.formg.value.password,
    };
    this.auth.login(data).subscribe(
      (res: any) => {
        this.user = res.user;
        if (this.user.role_type === 'admin') {
          localStorage.setItem('admin', this.user.role_type);
          localStorage.setItem('user_id', this.user.id);
          this.router.navigate(['events/eventList'])
        } else {
          this.router.navigate(['events/eventList'])
          localStorage.setItem('user_id', this.user.id);
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
