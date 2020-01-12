import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { routePath } from 'src/app/constant/routes';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  constructor(private route: Router) { }
  handleNewRecepitButton = () => {
    this.route.navigateByUrl(routePath.Recipit_Form);
  }
  handleListBack = () => {
    this.route.navigateByUrl(routePath.Landing_Page);
  }
  handleBackArrow = () => {
    this.route.navigateByUrl(routePath.Recipit_List);
  }
}
