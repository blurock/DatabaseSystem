import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurposeconceptComponent } from './purposeconcept.component';

describe('PurposeconceptComponent', () => {
  let component: PurposeconceptComponent;
  let fixture: ComponentFixture<PurposeconceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurposeconceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurposeconceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
