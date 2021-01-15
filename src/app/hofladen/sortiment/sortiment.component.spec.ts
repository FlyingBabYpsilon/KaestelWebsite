import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortimentComponent } from './sortiment.component';

describe('SortimentComponent', () => {
  let component: SortimentComponent;
  let fixture: ComponentFixture<SortimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
