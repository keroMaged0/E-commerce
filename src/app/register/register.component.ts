import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isLoding: boolean = false;
  responseError: string = '';
  constructor(private _AuthService:AuthService ,private _Router:Router)
  {


  }

  registerForm:FormGroup = new FormGroup({
    name:new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email:new FormControl(null, [Validators.required, Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    phone:new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
  }, {validators:this.rePasswordMatch})


  rePasswordMatch(registerForm:any)
  {
   let passowrdControls =  registerForm.get('password');
   let rePassowrdControls =  registerForm.get('rePassword');

   if (passowrdControls.value === rePassowrdControls.value) 
   {
    return null;
   }
   else
   {
    rePassowrdControls.setErrors({passwordMatch:'password and rePassword not match'});
    return {passwordMatch:'password and rePassword not match'}
   }

  }

  handelRegister(registerForm:FormGroup){


if (registerForm.valid) {

  this.isLoding = true;
  this._AuthService.signUp(registerForm.value).subscribe({
    next: (response) => {
      if (response.message == 'success') {
        this.isLoding = false;
        this._Router.navigate(['/logIn'])
      }

    },
    error: (err) => {
      this.isLoding = false;
      console.log(err.error);
      
      this.responseError = err.error.message;
      // this.responseError = err.error.errors.msg;

    },
  })
}
}


  }


