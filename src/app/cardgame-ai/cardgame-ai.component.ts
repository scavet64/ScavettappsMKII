import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cardgame-ai',
  templateUrl: './cardgame-ai.component.html',
  styleUrls: ['./cardgame-ai.component.scss']
})
export class CardgameAIComponent implements OnInit, AfterViewInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
    this.titleService.setTitle('Scavettapps: Applying AI to Online Trading Card Games');
  }

}
