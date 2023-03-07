import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-card-with-selector',
  templateUrl: './card-with-selector.component.html',
  styleUrls: ['./card-with-selector.component.css'],
})
export class CardWithSelectorComponent implements OnInit {
  @Input() id!: number;
  productsList: any;
  pageNumber: number = 1;
  hepoBlkPrice = 369;
  hepoSoftPrice = 759;
  casaBlkPrice = 135;
  casaSoftPrice = 260;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllTelescopicChannel().subscribe((res) => (this.productsList = res));
    this.pageNumber = 1;
  }

  hepoBlkChange(event: any) {
    let size = event.target.value;
    size = parseInt(size);
    switch (size) {
      case 10:
        this.hepoBlkPrice = 369;
        break;
      case 12:
        this.hepoBlkPrice = 409;
        break;
      case 14:
        this.hepoBlkPrice = 449;
        break;
      case 16:
        this.hepoBlkPrice = 489;
        break;
      case 18:
        this.hepoBlkPrice = 549;
        break;
      case 20:
        this.hepoBlkPrice = 599;
        break;
      case 22:
        this.hepoBlkPrice = 669;
        break;
      case 24:
        this.hepoBlkPrice = NaN;
        break;
    }
  }

  hepoSoftChange(event: any) {
    let size = event.target.value;
    size = parseInt(size);
    switch (size) {
      case 12:
        this.hepoSoftPrice = 759;
        break;
      case 14:
        this.hepoSoftPrice = 819;
        break;
      case 16:
        this.hepoSoftPrice = 879;
        break;
      case 18:
        this.hepoSoftPrice = 939;
        break;
      case 20:
        this.hepoSoftPrice = 999;
        break;
      case 22:
        this.hepoSoftPrice = 1149;
        break;
    }
  }

  casaBlkChange(event: any) {
    let size = event.target.value;
    size = parseInt(size);
    const rs = 13.5;
    this.casaBlkPrice = size * rs;
  }

  casaSoftChange(event: any) {
    let size = event.target.value;
    size = parseInt(size);
    const rs = 26;
    this.casaSoftPrice = size * rs;
  }
}
