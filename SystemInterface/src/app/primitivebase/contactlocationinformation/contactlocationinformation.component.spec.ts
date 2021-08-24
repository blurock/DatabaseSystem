import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactlocationinformationComponent } from './contactlocationinformation.component';

describe('ContactlocationinformationComponent', () => {
  let component: ContactlocationinformationComponent;
  let fixture: ComponentFixture<ContactlocationinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactlocationinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactlocationinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
