import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  constructor(private _ProductService: ProductService,private _CartService:CartService,private _ToastrService:ToastrService) {

  }
  wishListData: any[] = []

  remove(id: string) {
    console.log(id);
    this._ProductService.deleteWhishListProdect(id).subscribe({
      next: (Response) => {
        console.log(Response);

      }
      ,
      error:(err)=>console.log(err),
      complete:()=>{
        this.addwishList();
        this._ToastrService.info('Product remove successfully to your wishList', 'success')
  
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
      this._ToastrService.info('Product add successfully to your cart', 'success')

    }

    
  })
}

  addwishList()
  {
    this._ProductService.getWhishListProdect().subscribe({
      next: (response) => {
        console.log(response),
          this.wishListData = response.data

      }

    })
  }
  ngOnInit(): void {
   this.addwishList();
  }

}
