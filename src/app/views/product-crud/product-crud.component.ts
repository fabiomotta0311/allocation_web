import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  atributoLegal = "qualquer"

  constructor() { }

  ngOnInit(): void {
  }

  fazerAlgo(): void {
    console.log('Fazendo algo!')
  }

  
}
