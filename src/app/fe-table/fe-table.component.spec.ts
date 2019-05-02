import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeTableComponent } from './fe-table.component';

describe('FeTableComponent', () => {
  let component: FeTableComponent;
  let fixture: ComponentFixture<FeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
