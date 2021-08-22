import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationByDomaineComponent } from './formation-by-domaine.component';

describe('FormationByDomaineComponent', () => {
  let component: FormationByDomaineComponent;
  let fixture: ComponentFixture<FormationByDomaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationByDomaineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationByDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
