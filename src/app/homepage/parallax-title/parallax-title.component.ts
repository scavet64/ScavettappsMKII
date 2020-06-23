import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';

import * as Parallax from 'parallax-js';
declare var Parallax: any;

@Component({
  selector: 'app-parallax-title',
  templateUrl: './parallax-title.component.html',
  styleUrls: ['./parallax-title.component.css']
})
export class ParallaxTitleComponent implements AfterContentInit {

  @ViewChild('testing', {static: false}) parallax;

  constructor() { }

  ngAfterContentInit() {
    const scene = document.getElementById('testing');
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true
    });
  }

}
