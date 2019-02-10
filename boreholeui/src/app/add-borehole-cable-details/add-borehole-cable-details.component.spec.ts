import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoreholeCableDetailsComponent } from './add-borehole-cable-details.component';

describe('AddBoreholeCableDetailsComponent', () => {
  let component: AddBoreholeCableDetailsComponent;
  let fixture: ComponentFixture<AddBoreholeCableDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBoreholeCableDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBoreholeCableDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
