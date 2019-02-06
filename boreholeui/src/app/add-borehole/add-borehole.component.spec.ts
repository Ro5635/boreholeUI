import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoreholeComponent } from './add-borehole.component';

describe('AddBoreholeComponent', () => {
  let component: AddBoreholeComponent;
  let fixture: ComponentFixture<AddBoreholeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBoreholeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBoreholeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
