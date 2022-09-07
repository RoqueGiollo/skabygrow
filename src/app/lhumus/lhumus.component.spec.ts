import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LhumusComponent } from './lhumus.component';

describe('LhumusComponent', () => {
  let component: LhumusComponent;
  let fixture: ComponentFixture<LhumusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LhumusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LhumusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
