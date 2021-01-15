import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimousinhofComponent } from './limousinhof.component';

describe('LimousinhofComponent', () => {
  let component: LimousinhofComponent;
  let fixture: ComponentFixture<LimousinhofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimousinhofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimousinhofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
