import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HjohnsoniiComponent } from './hjohnsonii.component';

describe('HjohnsoniiComponent', () => {
  let component: HjohnsoniiComponent;
  let fixture: ComponentFixture<HjohnsoniiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HjohnsoniiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HjohnsoniiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
