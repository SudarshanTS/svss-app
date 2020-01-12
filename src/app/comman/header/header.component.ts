import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() showRightContainer: boolean;
  @Input() showBackArrow: boolean;
  @Input() handleNewButton: any;
  @Input() newButtonText: string;
  @Input() handleBack: any;
  @Input() headerTitle;
  constructor() { }

  ngOnInit() {
  }
  backArrowClick = () => {
    this.handleBack();
  }

}
