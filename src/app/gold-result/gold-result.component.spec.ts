import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldResultComponent } from './gold-result.component';

describe('GoldResultComponent', () => {
  let component: GoldResultComponent;
  let fixture: ComponentFixture<GoldResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
