import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenErrorComponent } from './componen-error.component';

describe('ComponenErrorComponent', () => {
  let component: ComponenErrorComponent;
  let fixture: ComponentFixture<ComponenErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
