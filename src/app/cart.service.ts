import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  numberOfCartItem =new BehaviorSubject(0);
  constructor(private _HttpClient:HttpClient) { 
    this.getLoggedUser().subscribe({
      next:(response)=>{
        this.numberOfCartItem.next(response.numOfCartItems);
        console.log(response);
        
      },
      error:(err)=>console.log(err)
      
    })
  }


  headers:any={
    token:localStorage.getItem('userToken')
  }

  addToCart(productId:string):Observable<any>
  {
    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/cart',
    {productId:productId},
    {headers:this.headers }
    )
  }
  getLoggedUser ():Observable<any>
  {
    return this._HttpClient.get('https://route-ecommerce.onrender.com/api/v1/cart',
    {headers:this.headers }
    )
  }
  removeSpecificCart(productId:string):Observable<any>
  {
    return this._HttpClient.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}`,
    {headers:this.headers }
    )
  }
  updateCartProduct(productId:string,count:string):Observable<any>
  {
    return this._HttpClient.put(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}`,
    {count:count} ,
    {headers:this.headers }
    )
  }
  
  getUserOrders(cartId:string):Observable<any>
  {
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/orders/user/${cartId}`,
    
    {headers:this.headers }
    )
  }
  

  CheckOutSession(carttId:string,shippingAddress:FormGroup):Observable<any>
  {
    return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/orders/checkout-session/${carttId}?url=http://localhost:4200`,
    {shippingAddress:shippingAddress} ,
    {headers:this.headers }
    )
  }
}
