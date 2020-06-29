import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRefComponent } from './dashboard-ref.component';

describe('DashboardRefComponent', () => {
  let component: DashboardRefComponent;
  let fixture: ComponentFixture<DashboardRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
