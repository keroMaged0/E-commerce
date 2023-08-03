import { ProductService } from './../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-prodect-details',
  templateUrl: './prodect-details.component.html',
  styleUrls: ['./prodect-details.component.css']
})
export class ProdectDetailsComponent  implements OnInit {
  constructor(private elementRef: ElementRef, private _CartService:CartService,private _Router:Router,private _ActivatedRoute:ActivatedRoute,private _ProductService:ProductService,private _ToastrService:ToastrService)
  {

  }

  mutProudect:any[] = [];
  zoomFactor: number = 1.5; // The amount of zoom on hover
  imageTransform: string = 'scale(1.0)';
  containerWidth: number = 0;
  containerHeight: number = 0;


  onMouseMove(event: MouseEvent): void {
    if (!this.containerWidth || !this.containerHeight) {
      const container = this.elementRef.nativeElement.querySelector('.image-container');
      this.containerWidth = container.clientWidth;
      this.containerHeight = container.clientHeight;
    }

    const offsetX = event.offsetX;
    const offsetY = event.offsetY;
    const percentageX = offsetX / this.containerWidth;
    const percentageY = offsetY / this.containerHeight;

    this.imageTransform = `scale(${this.zoomFactor}) translate(-${percentageY * 20}%, -${percentageX * 40}%)`;
  }

  onMouseLeave(): void {
    this.imageTransform = 'scale(1.0)';
  }
  addToCart(productId:string)
{
  this._CartService.addToCart(productId).subscribe({
    next:(response)=>{
      this._CartService.numberOfCartItem.next(response.numOfCartItems),
console.log(response);

    },
    error:(err)=>console.log(err),
    complete:()=>{
      this._ToastrService.info('Product added successfully to your cart', 'success')

    }   
    
    
  })
}

  protectedId:any;
  protectedDeatails:any;
  ngOnInit()
  {

    
    this._ActivatedRoute.paramMap.subscribe(
      (prams)=>{
        this.protectedId = prams.get('id')
      })  


      this._ProductService.getProductDetails(this.protectedId)
      .subscribe((respones)=>{
        this.protectedDeatails = respones.data;
        console.log(respones);
        
      },
      
      
)


  }
  
  close()
  {
    
    this._Router.navigate(['/home'])
  }

  mainSrc:string = '';

  changeSrc(src:string)
  {
console.log(src);
this.mainSrc = src;

  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: true,
    navSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      
    },
    nav: false
  }
}
