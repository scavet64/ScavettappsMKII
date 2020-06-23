import { Component, OnInit, ViewChild, AfterContentInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterViewInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
    this.titleService.setTitle('Scavettapps: Homepage');
  }

}
