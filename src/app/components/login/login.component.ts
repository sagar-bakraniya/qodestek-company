import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { Login } from 'src/app/store/actions/use.actions';
import { isLoggedIn } from 'src/app/store/selector/user.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.initLoginForm();
  }


  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const { email, password } = this.loginForm.value;
    this.store.dispatch(Login({ email: email, password: password }));
    this.store.select(isLoggedIn).pipe(take(1)).subscribe(user => {
      if (user) {
        this.router.navigate(['/dashboard'])
      } else {
        this.matSnackBar.open('Email or password invalid', undefined, {
          duration: 3000
        })
      }
    });
  }

}
