import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadenComponent } from './laden.component';

describe('LadenComponent', () => {
  let component: LadenComponent;
  let fixture: ComponentFixture<LadenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
