import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.formg = fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    let data = {
      email: this.formg.value.email,
      password: this.formg.value.password,
    };

    this.auth.login(data).subscribe(
      (res: any) => {
        this.user = res.user;
        if (this.user.role_type === 'admin') {
          localStorage.setItem('admin', this.user.role_type);
          localStorage.setItem('user_id', this.user.id);
          this.router.navigate(['events/layout/eventList']);
          localStorage.setItem('username', this.user.firstname);
          this.snackBar.open('Admin Login successful', 'Close', {
            duration: 3000,
          });
        } else {
          this.router.navigate(['userlayout']);
          localStorage.clear();
          localStorage.setItem('user_id', this.user.id);
          localStorage.setItem('username', this.user.first_name);
          this.snackBar.open('user Login success', 'Close', { duration: 3000 });
        }
      },
      (err: any) => {
        console.log(err);
        this.snackBar.open('Login failed', 'Close', { duration: 3000 });
      }
    );
  }
  reg() {
    this.router.navigate(['auth/register']);
  }
}
