import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatadescriptionComponent } from './datadescription.component';

describe('DatadescriptionComponent', () => {
  let component: DatadescriptionComponent;
  let fixture: ComponentFixture<DatadescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatadescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatadescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
