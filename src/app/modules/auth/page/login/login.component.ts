import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from 'src/app/core/service/spinner.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { AuthResponse } from 'src/app/data/schema/auth-response';
import { ProfileService } from 'src/app/core/service/profile.service';
import { GlobalConstants } from 'src/app/core/constants/global-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  authResponse!: AuthResponse;
  
  constructor(
    private router: Router,
    private loginFormBuilder: FormBuilder,
    private readonly spinnerService: SpinnerService,
    private authService: AuthService,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    GlobalConstants.USER_CONTEXT.accessToken = '';

    this.loginForm = this.loginFormBuilder.group({
      emailId: ['rajivnh@msn.com', [Validators.required]],
      password: ['secret', [Validators.required]]
    });
  }
  
  auth() {
    this.spinnerService.isLoading = true;

    let emailId = this.loginForm.get('emailId')?.value;
    let password = this.loginForm.get('password')?.value;

    setTimeout(() => {
      if(emailId === "rajivnh@msn.com") {
        this.router.navigate(['/My/Dashboard']);
      } else {
        this.router.navigate(['/Admin/Dashboard']);
      }
      
      this.spinnerService.isLoading = false;
    }, 2000);
    /*
    this.authService.auth(emailId, password).subscribe(
      (authResponse) => {
        this.authResponse = authResponse;

        GlobalConstants.USER_CONTEXT = {
          emailId: emailId, 
          accessToken: this.authResponse.access_token, 
          isLoggerIn: true
        };
          
        setTimeout(() => {
          if(emailId === "rajivnh@msn.com") {
            this.router.navigate(['/My/Dashboard']);
          } else {
            this.router.navigate(['/Admin/Dashboard']);
          }
          
          this.spinnerService.isLoading = false;
        }, 2000);
      }
    );*/
  }
}
