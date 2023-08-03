import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,BehaviorSubject } from "rxjs";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private _HttpClient:HttpClient) {

  }

  getProduct():Observable<any>
  {
   return this._HttpClient.get('https://route-ecommerce.onrender.com/api/v1/products');
  }
  getProductDetails(id:string):Observable<any>
  {
   return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`);
  }
  getProductCatagory():Observable<any>
  {
   return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/categories`);
  }
  getCatagoryDetails(id:string):Observable<any>
  {
   return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`);
  }
 
  getBrand():Observable<any>
  {
   return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands`);
  }
  getBrandDetails(id:string):Observable<any>
  {
   return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`);
  }
  getWhishList(id:string):Observable<any>
  {
   let headersDate = new HttpHeaders().set('token',' ' + localStorage.getItem('userToken'))
   return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{productId: id },{headers: headersDate})
  }
  getWhishListProdect():Observable<any>
  {
   let headersDate =new HttpHeaders().set('token',' ' + localStorage.getItem('userToken'))
   return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{headers: headersDate})
  }
  deleteWhishListProdect(id:string):Observable<any>
  {
   let headersDate =new HttpHeaders().set('token',' ' + localStorage.getItem('userToken'))
   return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{headers: headersDate})
  }
}
