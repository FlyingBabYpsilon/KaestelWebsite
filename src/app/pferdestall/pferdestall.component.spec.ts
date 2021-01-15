import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PferdestallComponent } from './pferdestall.component';

describe('PferdestallComponent', () => {
  let component: PferdestallComponent;
  let fixture: ComponentFixture<PferdestallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PferdestallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PferdestallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
