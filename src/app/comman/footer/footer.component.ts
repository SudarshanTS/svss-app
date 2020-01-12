import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() onSubmit;
  @Input() onCancel;
  constructor() { }

  ngOnInit() {
  }
  handleCancel = () => {
    this.onCancel();
  }
  handleSubmit = () => {
    this.onSubmit();
  }
}
