import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardgame-ai',
  templateUrl: './cardgame-ai.component.html',
  styleUrls: ['./cardgame-ai.component.scss']
})
export class CardgameAIComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

}
