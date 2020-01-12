import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './module/landing-page/landing-page.component';
import { ReceiptPageComponent } from './module/receipt-page/receipt-page.component';
import { routePath } from './constant/routes';
import { ReceiptFormComponent } from './module/receipt-page/receipt-form/receipt-form.component';


const routes: Routes = [
  {
    path: routePath.Landing_Page, component: LandingPageComponent
  },
  {
    path: routePath.Recipit_List, component: ReceiptPageComponent,
  },
  {
    path: routePath.Recipit_Form, component: ReceiptFormComponent,
  },
  {
    path: '', redirectTo: routePath.Landing_Page, pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
