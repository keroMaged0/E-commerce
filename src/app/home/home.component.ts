import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  prodects:any[] = [];
  constructor(private _ProductService:ProductService,private _CartService:CartService,private _ToastrService:ToastrService)
  {}
  isWishList:boolean = false;
  x:string = '';
  
  addWishList(id:string)
  {
    this.isWishList = ! this.isWishList;
    console.log(id);
    this._ProductService.getWhishList(id).subscribe({
      next:(response)=>console.log(response),
      error:(err)=>console.log(err),
      complete:()=>{
        this._ToastrService.info('Product added successfully to your cart', 'success')

      }    
    })
    
  }
  
  addToCart(productId:string)
  {
    this._CartService.addToCart(productId).subscribe({
      next:(response)=>{
        this._CartService.numberOfCartItem.next(response.numOfCartItems),
        console.log(response)},
      error:(err)=>console.log(err),
      complete:()=>{
        this._ToastrService.info('Product added successfully to your wishList', 'success')
  
      }
  
      
    })
  }
  
    ngOnInit(): void {
      this._ProductService.getProduct().subscribe({
        next:(response)=> this.prodects = response.data   
        
      }
      
      )
    }
  
    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 1000,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      },
      nav: true
    
        }
}
