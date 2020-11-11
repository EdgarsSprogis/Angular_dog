import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DognameComponent } from './dogname.component';

describe('DognameComponent', () => {
  let component: DognameComponent;
  let fixture: ComponentFixture<DognameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DognameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DognameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
