import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBoreholeComponent } from './display-borehole.component';

describe('DisplayBoreholeComponent', () => {
  let component: DisplayBoreholeComponent;
  let fixture: ComponentFixture<DisplayBoreholeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayBoreholeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBoreholeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
