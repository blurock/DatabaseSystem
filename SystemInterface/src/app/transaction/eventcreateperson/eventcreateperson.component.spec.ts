import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventcreatepersonComponent } from './eventcreateperson.component';

describe('EventcreatepersonComponent', () => {
  let component: EventcreatepersonComponent;
  let fixture: ComponentFixture<EventcreatepersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventcreatepersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventcreatepersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
