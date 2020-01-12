import { Component, OnInit } from '@angular/core';
import { ReceiptService } from './services/receipt.service';

@Component({
  selector: 'app-receipt-page',
  templateUrl: './receipt-page.component.html',
  styleUrls: ['./receipt-page.component.scss']
})
export class ReceiptPageComponent implements OnInit {

  constructor(private service: ReceiptService) { }

  ngOnInit() {
  }

}
