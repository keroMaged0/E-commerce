import { ToastrService } from 'ngx-toastr';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(private _CartService:CartService,private _ToastrService:ToastrService)
  {

  }
  getLoggedUser:any =null; 

  updateCartProduct(productId:string,count:string)
  {
    this._CartService.updateCartProduct(productId,count).subscribe({
      
      next:(response)=>{this.getLoggedUser = response.data,
      console.log(response.data)},
      error:(err)=>console.log(err),
      complete:()=>{
        this._ToastrService.info(' successfully update', 'success')
  
      }   
    })
  }
  removeSpecificCart(productId:string)
  {
    this._CartService.removeSpecificCart(productId).subscribe({
      next:(response)=>{this.getLoggedUser = response.data,
        this._CartService.numberOfCartItem.next(response.numOfCartItems),
      console.log(response.data)},
      error:(err)=>console.log(err),
      complete:()=>{
        this._ToastrService.info('Product remove successfully to  cart', 'success')
      }   
    })
  }
  ngOnInit(): void {
    this._CartService.getLoggedUser().subscribe(
      {
        next:(response)=>{ this.getLoggedUser=response.data
        console.log(response.data);
        
        },
       
        
        error:(err)=>console.log(err)
        
      }
    )
  }


}
