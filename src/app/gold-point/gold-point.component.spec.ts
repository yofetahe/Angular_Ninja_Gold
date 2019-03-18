import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldPointComponent } from './gold-point.component';

describe('GoldPointComponent', () => {
  let component: GoldPointComponent;
  let fixture: ComponentFixture<GoldPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
