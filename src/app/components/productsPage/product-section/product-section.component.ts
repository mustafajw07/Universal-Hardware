import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css'],
})
export class ProductSectionComponent implements OnChanges {
  @Input() id!: number;
  productsList: any;
  pageNumber: number = 1;

  constructor(private api: ApiService) { }

  ngOnChanges(changes: any): void {
    this.id = changes.id.currentValue;
    switch (this.id) {
      case 1:
        this.api
          .getAllWickerProducts()
          .subscribe((res) => (this.productsList = res));
          this.pageNumber = 1;
        break;
      case 2:
        this.api
          .getAllRehauProducts()
          .subscribe((res) => (this.productsList = res));
          this.pageNumber = 1;
        break;
      case 3:
        this.api
          .getAllHepoProducts()
          .subscribe((res) => (this.productsList = res));
          this.pageNumber = 1;
        break;
      case 4:
        this.api
          .getAllPalladiumProducts()
          .subscribe((res) => (this.productsList = res));
          this.pageNumber = 1;
        break;
      case 5:
        this.api
          .getAllFloraProducts()
          .subscribe((res) => (this.productsList = res));
          this.pageNumber = 1;
        break;
      case 6:
        this.api
          .getAllTelescopicChannel()
          .subscribe((res) => (this.productsList = res));
          this.pageNumber = 1;
        break;
      case 7:
        this.api
          .getAllEverydayProducts()
          .subscribe((res) => (this.productsList = res));
          this.pageNumber = 1;
        break;
      case 8:
        this.api
          .getAllGodrejProducts()
          .subscribe((res) => (this.productsList = res));
          this.pageNumber = 1;
        break;
      case 9:
        this.api
          .getAllEuropaProducts()
          .subscribe((res) => (this.productsList = res));
          this.pageNumber = 1;
        break;
      default:
        this.api
          .getAllProducts()
          .subscribe((res) => (this.productsList = res));
          this.pageNumber = 1;
    }
  }
}
