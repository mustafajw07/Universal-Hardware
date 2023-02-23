import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-with-selector',
  templateUrl: './card-with-selector.component.html',
  styleUrls: ['./card-with-selector.component.css'],
})
export class CardWithSelectorComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  onSize(event: any) {
    console.log(event.target.value);
  }
}
