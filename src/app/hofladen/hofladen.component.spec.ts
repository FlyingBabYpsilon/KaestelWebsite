import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HofladenComponent } from './hofladen.component';

describe('HofladenComponent', () => {
  let component: HofladenComponent;
  let fixture: ComponentFixture<HofladenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HofladenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HofladenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
