import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaldescriptionComponent } from './personaldescription.component';

describe('PersonaldescriptionComponent', () => {
  let component: PersonaldescriptionComponent;
  let fixture: ComponentFixture<PersonaldescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaldescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaldescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
