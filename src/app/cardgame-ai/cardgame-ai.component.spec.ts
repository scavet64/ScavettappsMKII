import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardgameAIComponent } from './cardgame-ai.component';

describe('CardgameAIComponent', () => {
  let component: CardgameAIComponent;
  let fixture: ComponentFixture<CardgameAIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardgameAIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardgameAIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
