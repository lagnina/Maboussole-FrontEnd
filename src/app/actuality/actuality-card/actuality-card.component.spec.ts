import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualityCardComponent } from './actuality-card.component';

describe('ActualityCardComponent', () => {
  let component: ActualityCardComponent;
  let fixture: ComponentFixture<ActualityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualityCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
