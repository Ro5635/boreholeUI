import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBoreholeCableComponent } from './display-borehole-cable.component';

describe('DisplayBoreholeCableComponent', () => {
  let component: DisplayBoreholeCableComponent;
  let fixture: ComponentFixture<DisplayBoreholeCableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayBoreholeCableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBoreholeCableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
