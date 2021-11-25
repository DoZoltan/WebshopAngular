import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavBarsComponent } from './admin-nav-bars.component';

describe('AdminNavBarsComponent', () => {
  let component: AdminNavBarsComponent;
  let fixture: ComponentFixture<AdminNavBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNavBarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNavBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
