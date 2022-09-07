import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MamboretaComponent } from './mamboreta.component';

describe('MamboretaComponent', () => {
  let component: MamboretaComponent;
  let fixture: ComponentFixture<MamboretaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MamboretaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MamboretaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
