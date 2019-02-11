import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBoreholeRotarydrillComponent } from './display-borehole-rotarydrill.component';

describe('DisplayBoreholeRotarydrillComponent', () => {
  let component: DisplayBoreholeRotarydrillComponent;
  let fixture: ComponentFixture<DisplayBoreholeRotarydrillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayBoreholeRotarydrillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBoreholeRotarydrillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
