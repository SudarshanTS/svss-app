import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angularMaterial.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TextFieldComponent } from './comman/text-field/text-field.component';
import { HeaderComponent } from './comman/header/header.component';
import { LandingPageComponent } from './module/landing-page/landing-page.component';
import { ReceiptPageComponent } from './module/receipt-page/receipt-page.component';
import { ReceiptFormComponent } from './module/receipt-page/receipt-form/receipt-form.component';
import { FooterComponent } from './comman/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TextFieldComponent,
    HeaderComponent,
    LandingPageComponent,
    ReceiptPageComponent,
    ReceiptFormComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
