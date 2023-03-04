import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithSelectorComponent } from './card-with-selector.component';

describe('CardWithSelectorComponent', () => {
  let component: CardWithSelectorComponent;
  let fixture: ComponentFixture<CardWithSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWithSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardWithSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
