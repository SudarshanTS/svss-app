import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  cards = [];
  constructor() { }

  ngOnInit() {
    this.cards = [
      {
        name: 'Receipt', icon: '', route: '/layout/receipt/list'
      }
    ];
  }

}
