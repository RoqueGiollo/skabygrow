import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkupachaComponent } from './ukupacha.component';

describe('UkupachaComponent', () => {
  let component: UkupachaComponent;
  let fixture: ComponentFixture<UkupachaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UkupachaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UkupachaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
