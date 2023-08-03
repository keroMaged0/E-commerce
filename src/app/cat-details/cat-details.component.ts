import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent implements OnInit{

  constructor(private _ProdectsService:ProductService ,private _Router:Router ,private _ActivatedRoute:ActivatedRoute)
  {}

  CatagoryDetails:any[] = [];
  protectedId:any;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(
      (prams)=>{
        this.protectedId = prams.get('id');
        console.log(prams.get('id'));
        

      })
    this._ProdectsService.getCatagoryDetails(this.protectedId).subscribe((respones)=>{
    this.CatagoryDetails = respones.data;
    console.log(respones.data );
    
     
  })

    
    
  }
}
