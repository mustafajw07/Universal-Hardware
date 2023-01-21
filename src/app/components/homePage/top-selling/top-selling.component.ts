import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html',
  styleUrls: ['./top-selling.component.css']
})
export class TopSellingComponent implements OnInit {

  productListActive: any = [];
  productListInActive: any = [];

  constructor(private apiService: ApiService,
              private router : Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts () {
    this.apiService.getAllTrendingProducts().subscribe((res :any) => {
      this.productListActive.push(res[0]);
      this.productListActive.push(res[1]);
      this.productListActive.push(res[2]);
      this.productListActive.push(res[3]);
      this.productListInActive.push(res[4]);
      this.productListInActive.push(res[5]);
      this.productListInActive.push(res[6]);
      this.productListInActive.push(res[7]);
    });
  }

  navigate(){
    this.router.navigate(['/products']);
  }

}
