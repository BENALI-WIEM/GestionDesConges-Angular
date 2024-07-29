import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierCongeComponent } from './calendrier-conge.component';

describe('CalendrierCongeComponent', () => {
  let component: CalendrierCongeComponent;
  let fixture: ComponentFixture<CalendrierCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendrierCongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendrierCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
