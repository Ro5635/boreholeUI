import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoreholeFundamentalDetailsComponent } from './add-borehole-fundamental-details.component';

describe('AddBoreholeFundamentalDetailsComponent', () => {
  let component: AddBoreholeFundamentalDetailsComponent;
  let fixture: ComponentFixture<AddBoreholeFundamentalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBoreholeFundamentalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBoreholeFundamentalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
