import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualityDetailComponent } from './actuality-detail.component';

describe('ActualityDetailComponent', () => {
  let component: ActualityDetailComponent;
  let fixture: ComponentFixture<ActualityDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualityDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
