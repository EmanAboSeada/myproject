import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  icons;
  isLoading: boolean;
  requestError: string;
  

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }


  ngOnInit(): void {

    this.icons = {email: faEnvelope, password: faUnlockAlt };
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", Validators.required)
    })
  }


  onSubmit() {
    this.requestError = null;
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.isLoading = true;
      this.authService.userSignIn(
        this.loginForm.value.email,
        this.loginForm.value.password
      ).subscribe(resData => {
        this.isLoading = false;
        this.router.navigate(['/home']);
      }, errorMes => {
        this.requestError = errorMes;
        this.isLoading = false;
      })
    }
  }

}
