import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  constructor(private _ProdectsService:ProductService)
  {

  }

  prodectBrands:any[] = [];
  ngOnInit(): void {
    this._ProdectsService.getBrand().subscribe(
      {
        next:(response)=>{
          this.prodectBrands =  response.data,
          console.log(response.data);

        }
      }
    )
  }
}
