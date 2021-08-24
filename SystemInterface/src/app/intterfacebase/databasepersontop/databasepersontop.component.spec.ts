import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabasepersontopComponent } from './databasepersontop.component';

describe('DatabasepersontopComponent', () => {
  let component: DatabasepersontopComponent;
  let fixture: ComponentFixture<DatabasepersontopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabasepersontopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabasepersontopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
