import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualityListComponent } from './actuality-list.component';

describe('ActualityListComponent', () => {
  let component: ActualityListComponent;
  let fixture: ComponentFixture<ActualityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualityListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
