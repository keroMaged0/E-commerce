import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ceak-out',
  templateUrl: './ceak-out.component.html',
  styleUrls: ['./ceak-out.component.css']
})
export class CeakOutComponent {

  cartId:string = '';  
  constructor(private _CartService:CartService,private _ActivatedRoute:ActivatedRoute)
  {
  
  }
  ngOnInit(): void {
    this.cartId = this._ActivatedRoute.snapshot.params['id']
  }
  
  shippingAddress:FormGroup = new FormGroup({
    details:new FormControl(null,[Validators.required,Validators.maxLength(20),Validators.minLength(5)]),
    phone:new FormControl(null,[Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city:new FormControl(null,[Validators.required,Validators.maxLength(20),Validators.minLength(5)])
  })
  
  
  
  handelSubmit(shippingAddress:FormGroup)
  {
  console.log(shippingAddress.value);
  this._CartService.CheckOutSession(this.cartId,shippingAddress.value).subscribe({
    next:(response:any)=>{
      console.log(response.session.url);
      
      window.location.href = response.session.url
    },
    error:(err)=>console.log(err),
    
  })
  }
}
