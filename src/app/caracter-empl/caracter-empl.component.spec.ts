import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracterEmplComponent } from './caracter-empl.component';

describe('CaracterEmplComponent', () => {
  let component: CaracterEmplComponent;
  let fixture: ComponentFixture<CaracterEmplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracterEmplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracterEmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
