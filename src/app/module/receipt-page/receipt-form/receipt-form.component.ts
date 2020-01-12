import { Component, OnInit } from '@angular/core';
import { ReceiptService } from '../services/receipt.service';

@Component({
  selector: 'app-receipt-form',
  templateUrl: './receipt-form.component.html',
  styleUrls: ['./receipt-form.component.scss']
})
export class ReceiptFormComponent implements OnInit {

  constructor(private service: ReceiptService) { }

  ngOnInit() {
  }

}
