import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Login, SingUp } from 'src/app/store/actions/use.actions';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  signUpForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private matSnackBar: MatSnackBar,
    private router: Router
  ) {
    this.initSignUpForm();
  }

  ngOnInit(): void {
  }

  initSignUpForm() {
    this.signUpForm = this.formBuilder.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });

  }


  registerUser() {
    const { email, password, username } = this.signUpForm.value;
    this.signUpForm.reset();

    this.store.dispatch(SingUp({ email, password, username }));
    this.store.dispatch(Login({ email, password }));
    this.router.navigate(['/dashboard']);
    this.matSnackBar.open('Congratulations, you have created account successfully,', undefined, {
      duration: 3000
    });
  }

  handlePasswordChange() {
    this.signUpForm.get('confirmPassword')?.setValidators(Validators.pattern(this.signUpForm.value.password))
  }
}
