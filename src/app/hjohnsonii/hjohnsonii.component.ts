import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hjohnsonii',
  templateUrl: './hjohnsonii.component.html',
  styleUrls: ['./hjohnsonii.component.scss']
})
export class HjohnsoniiComponent implements OnInit, AfterViewInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
    this.titleService.setTitle('Scavettapps: Halophila johnsonii');
  }

}
