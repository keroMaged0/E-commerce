
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent  implements OnInit{
  constructor(private _ProdectsService:ProductService)
  {

  }
  
  


  prodectsCatagory:any[] = [];
  ngOnInit(): void {
    this._ProdectsService.getProductCatagory().subscribe({
      next:(response)=> {this.prodectsCatagory = response.data,
      console.log(response.data);
      
      }
      
    })

  }

}
