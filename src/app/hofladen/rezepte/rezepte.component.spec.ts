import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RezepteComponent } from './rezepte.component';

describe('RezepteComponent', () => {
  let component: RezepteComponent;
  let fixture: ComponentFixture<RezepteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezepteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
