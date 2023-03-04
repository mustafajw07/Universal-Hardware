import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnChanges {
  @Input() id!: number;
  company = "All";
  companyDescription!: string;
  constructor() { }

  ngOnChanges(): void {
    switch (this.id) {
      case 1:
        this.company = "Wicket Basket";
        this.companyDescription = "100% traditional hand woven, using natural material Made with the best quality solid beech wood material Highly durable easy to wash and maintain and long - life product. Easy pull - out wicker basket comes with a locking system and channels.It can be used as a vegetable, fruit, storage, and kitchen basket What’s in the Box: One wicker basket, two side channels, and an inbuilt locking system."
        break;
      case 2:
        this.company = "Rehau";
        this.companyDescription = "A global leader in polymer processing technologies When Helmut Wagner founded REHAU in 1948 with just 2 employees, he illuminated the way forward with the principles of competence, passion, and innovation. Today, REHAU is an independent, family-owned company that has over 20,000 employees across 50 countries.";
        break;
      case 3:
        this.company = "Hepo";
        this.companyDescription = " Hepo has an impressive product portfolio consisting of Cabinet Hinges, Drawer Runners, Gas pump & Bi-fold lift-up (for over-head cabinets), Butt Hinges, Multi-Purpose Lock, Bathroom Fittings, Wire Baskets, Bed Fittings, Aluminium Profile, Connecting Fittings, Tower Bolt, Handles & much more.";
        break;
      case 4:
        this.company = "Palladium";
        this.companyDescription = "Palladium has completed four remarkable decades in the brass product industry seeing and being a part of all the innovations.Our quality has made Palladium synonymous to brass hinges.";
        break;
      case 5:
        this.company = "Flora";
        this.companyDescription = "";
        break;
      case 6:
        this.company = "Telescopic Channel";
        this.companyDescription = "Partial, Full or Over Extension Telescopic Slides - In Stainless Steel or Alu. Telescopic Slides from 4 to 80 in. Available in Stainless Steel or Aluminium. Free Quote. Heavy Duty. On Stock and Specific. Models: Extensions, partial or full Extension.";
        break;
      case 7:
        this.company = "Everyday";
        this.companyDescription = "‘Maruti Interior Products Private Limited’ being the first to enter this segment is considered a pioneer in Kitchen and Wardrobe accessories today. Expansion is our core ideology and taking it forward, we have ventured into the manufacturing of Customised Wire Racks, Oven Wire Grills, Custom Wire Formed products & components, Laser Cutting Components, etc. This is just one of our first step in the manufacturing kitchen products. Many more to come in the coming years";
        break;
      case 8:
        this.company = "Godrej";
        this.companyDescription = "Godrej Consumer Products is a leading emerging markets company. As part of the over 125-year young Godrej Group, we are fortunate to have a proud legacy built on the strong values of trust, integrity and respect for others. At the same time, we are growing fast and have exciting, ambitious aspirations.";
        break;
      case 9:
        this.company = "Europa";
        this.companyDescription = "EUROPA products are made of high quality laboratory tested materials. All EUROPA products span through series of stringent quality control tests, to international standards, at each stage of manufacturing. The product range includes Padlocks, Dead Locks, Night Latches, Cylindrical locks, Jemmy Proof Locks, Furniture Locks and Shutter locks etc. EUROPA has selected suitable product range for its customers to provide security to the houses they build.";
        break;
      default:
        this.company = "All"
        this.companyDescription = "";
    }
  }

}
