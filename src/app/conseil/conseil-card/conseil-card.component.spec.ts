import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseilCardComponent } from './conseil-card.component';

describe('ConseilCardComponent', () => {
  let component: ConseilCardComponent;
  let fixture: ComponentFixture<ConseilCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConseilCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseilCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
