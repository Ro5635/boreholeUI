import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoreholeRotarydrillDetailsComponent } from './add-borehole-rotarydrill-details.component';

describe('AddBoreholeRotarydrillDetailsComponent', () => {
  let component: AddBoreholeRotarydrillDetailsComponent;
  let fixture: ComponentFixture<AddBoreholeRotarydrillDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBoreholeRotarydrillDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBoreholeRotarydrillDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
