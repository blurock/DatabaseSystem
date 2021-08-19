import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationcomponentComponent } from './classificationcomponent.component';

describe('ClassificationcomponentComponent', () => {
  let component: ClassificationcomponentComponent;
  let fixture: ComponentFixture<ClassificationcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassificationcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
