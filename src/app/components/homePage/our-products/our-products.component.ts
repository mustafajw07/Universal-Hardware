import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.css'],
})
export class OurProductsComponent {
  hepo: any = [];
  rehau: any = [];
  wicker: any = [];
  everyday: any = [];

  constructor(private api: ApiService , private router: Router) {}
  
  onClick(id: any) {
    this.router.navigate([`products/${id}`])
  }
  ngOnInit(): void {
    this.getAllHepoProducts();
    this.getAllRehauProducts();
    this.getAllwickerProducts();
    this.getAllEverydayProducts();
  }

  getAllHepoProducts() {
    this.api.getAllHepoProducts().subscribe((res: any) => {
      this.hepo.push(res[0]);
      this.hepo.push(res[12]);
      this.hepo.push(res[6]);
      this.hepo.push(res[10]);
    });
  }

  getAllRehauProducts() {
    this.api.getAllRehauProducts().subscribe((res: any) => {
      this.rehau.push(res[0]);
      this.rehau.push(res[21]);
      this.rehau.push(res[7]);
      this.rehau.push(res[15]);
    });
  }

  getAllwickerProducts() {
    this.api.getAllWickerProducts().subscribe((res: any) => {
      this.wicker.push(res[0]);
      this.wicker.push(res[1]);
      this.wicker.push(res[2]);
      this.wicker.push(res[5]);
    });
  }

  getAllEverydayProducts() {
    this.api.getAllEverydayProducts().subscribe((res: any) => {
      this.everyday.push(res[0]);
      this.everyday.push(res[2]);
      this.everyday.push(res[4]);
      this.everyday.push(res[5]);
    });
  }
}
