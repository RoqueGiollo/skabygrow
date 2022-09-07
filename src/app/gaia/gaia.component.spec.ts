import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaiaComponent } from './gaia.component';

describe('GaiaComponent', () => {
  let component: GaiaComponent;
  let fixture: ComponentFixture<GaiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
