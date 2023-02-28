import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  id!: number;
  constructor() { }

  ngOnInit(): void {
  }
  selected(e : any){
    this.id = e;
  }
}
