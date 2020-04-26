import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hjohnsonii',
  templateUrl: './hjohnsonii.component.html',
  styleUrls: ['./hjohnsonii.component.scss']
})
export class HjohnsoniiComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

}
