import { AuthService } from './../auth.service';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  constructor (private _CartService:CartService,private _AuthService:AuthService)
  {}
  userId:any
  order:any;
  ngOnInit(): void {
    this.userId = this._AuthService.userData.getValue();

    this._CartService.getUserOrders(this.userId.id).subscribe({
      next:(Response)=>{
        console.log(Response);
        this.order = Response 
      }
    })
  }
}
