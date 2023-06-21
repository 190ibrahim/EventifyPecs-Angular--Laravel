import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public formg!: FormGroup;
  public user: any = [];

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.formg = fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      age: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
      role: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const data = {
      firstname: this.formg.value.firstname,
      lastname: this.formg.value.lastname,
      username: this.formg.value.username,
      email: this.formg.value.email,
      password: this.formg.value.password,
      age: this.formg.value.age,
      nationality: this.formg.value.nationality,
      role_type: this.formg.value.role,
    };

    this.auth.register(data).subscribe(
      (res: any) => {
        this.user = res.user;
        this.router.navigate(['login']);
        this.snackBar.open('Registration successful', 'Close', {
          duration: 3000,
        });
      },
      (err: any) => {
        console.log(err);
        this.snackBar.open('Registration failed', 'Close', { duration: 3000 });
      }
    );
  }

  reg() {
    this.router.navigate(['auth/login']);
  }
}
