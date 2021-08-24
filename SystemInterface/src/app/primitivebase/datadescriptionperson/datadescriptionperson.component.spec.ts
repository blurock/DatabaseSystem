import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatadescriptionpersonComponent } from './datadescriptionperson.component';

describe('DatadescriptionpersonComponent', () => {
  let component: DatadescriptionpersonComponent;
  let fixture: ComponentFixture<DatadescriptionpersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatadescriptionpersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatadescriptionpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
