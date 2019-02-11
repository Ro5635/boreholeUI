import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForBoreholeComponent } from './search-for-borehole.component';

describe('SearchForBoreholeComponent', () => {
  let component: SearchForBoreholeComponent;
  let fixture: ComponentFixture<SearchForBoreholeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchForBoreholeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForBoreholeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
