import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faUnlockAlt, fas } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  icons;
  isLoading: boolean;
  requestError: string;
  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit(): void {

    this.icons = { username: faUser, email: faEnvelope, password: faUnlockAlt };
    this.signupForm = new FormGroup({
      // username: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      passwordGroup: new FormGroup({
        password: new FormControl("", [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*\W)[a-zA-Z0-9\W]{8,}$/)]),
        confirmPassword: new FormControl("", [Validators.required])
      }, { validators: this.checkPasswords })
    })
  }


  onSubmit() {
    this.requestError = null;
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
    } else {
      this.isLoading = true;
      this.authService.userSignUp(
        // 'username':this.signupForm.value.username,
        this.signupForm.value.email,
        this.signupForm.value.passwordGroup.password
      ).subscribe(resData => {
        this.isLoading = false;
        this.router.navigate(['/home']);

      }, errorMes => {
        this.requestError = errorMes;
        this.isLoading = false;
      })
    }
  }

  checkPasswords(group: FormGroup): { [s: string]: boolean } {
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value;
    return pass === confirmPass ? null : { notSame: true }
  }

}
