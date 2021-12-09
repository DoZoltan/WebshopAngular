import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherboardFormComponent } from './motherboard-form.component';

describe('MotherboardFormComponent', () => {
  let component: MotherboardFormComponent;
  let fixture: ComponentFixture<MotherboardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotherboardFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherboardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
