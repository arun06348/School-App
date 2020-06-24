import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscellaneousDashboardComponent } from './miscellaneous-dashboard.component';

describe('MiscellaneousDashboardComponent', () => {
  let component: MiscellaneousDashboardComponent;
  let fixture: ComponentFixture<MiscellaneousDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscellaneousDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscellaneousDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
