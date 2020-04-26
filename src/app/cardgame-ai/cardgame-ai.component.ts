import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-cardgame-ai',
  templateUrl: './cardgame-ai.component.html',
  styleUrls: ['./cardgame-ai.component.scss']
})
export class CardgameAIComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

}
