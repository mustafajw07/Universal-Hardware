import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnChanges {
  @Input() id!: number;
  company = "All";
  constructor() { }

  ngOnChanges(): void {
    switch (this.id) {
      case 1:
        this.company = "Wicket Basket";
        break;
      case 2:
        this.company = "Rehau";
        break;
      case 3:
        this.company = "Hepo";
        break;
      case 4:
        this.company = "Palladium";
        break;
      case 5:
        this.company = "Flora";
        break;
      case 6:
        this.company = "Telescopic Channel";
        break;
      case 7:
        this.company = "Everyday";
        break;
      case 8:
        this.company = "Godrej";
        break;
      case 9:
        this.company = "Europa";
        break;
      default:
        this.company = "All"
    }
  }

}
