import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  @Output() updateSelected = new EventEmitter();
  companies: any = [];
  id!: any;
  name = "";

  constructor(private api: ApiService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllCompanies();
    this.route.params.subscribe((data: any) => {
      let company = data['id'];
      company = parseInt(company)
      switch (company) {
        case 1:
            this.id = 1;
            this.updateSelected.emit(this.id);
            this.getAllCompanies();
            break;
        case 2:
            this.id = 2;
            this.updateSelected.emit(this.id);
            this.getAllCompanies();
            break;
        case 3:
            this.id = 3;
            this.updateSelected.emit(this.id);
            this.getAllCompanies();
            break;
        case 4:
            this.id = 4;
            this.updateSelected.emit(this.id);
            this.getAllCompanies();
            break;
        case 5:
            this.id = 5;
            this.updateSelected.emit(this.id);
            this.getAllCompanies();
            break;
        case 6:
            this.id = 6;
            this.updateSelected.emit(this.id);
            this.getAllCompanies();
            break;
        case 7:
            this.id = 7;
            this.updateSelected.emit(this.id);
            this.getAllCompanies();
            break;
        case undefined:
            this.id = undefined;
            this.updateSelected.emit(undefined);
            this.getAllCompanies;
            break;
      }
    });
  }
  getAllCompanies() {
    this.api.getAllCompanies().subscribe((data) => {
      this.companies = data;
    });
  }
  selected(e: any) {
    this.id = e.target.value;
    this.router.navigate([`/products/${this.id}`])
    this.updateSelected.emit(this.id);
  }

}
