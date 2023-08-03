import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLoding: boolean = false;
  responseError: string = '';
  public loading = false;
  constructor(private _AuthService: AuthService, private _Router: Router) {

  }


  loginForme: FormGroup = new FormGroup({

    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),

  })

  handelLogin(loginForme: FormGroup)
  {
    
    if (loginForme.valid) {
      this.isLoding = true;
      this._AuthService.signIn(loginForme.value).subscribe({
        next: (response) => {

          if (response.message == 'success') {
            localStorage.setItem('userToken',response.token);
            this._AuthService.decoudUserData();
            this.isLoding = false;
            this._Router.navigate(['/home'])
          }

        },
        error: (err) => {
          this.isLoding = false;
          console.log(err.error);
          
          this.responseError = err.error.message;

        },
      })
    }
  }

  }


