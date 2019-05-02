import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeSlideComponent } from './fe-slide.component';

describe('FeSlideComponent', () => {
  let component: FeSlideComponent;
  let fixture: ComponentFixture<FeSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
