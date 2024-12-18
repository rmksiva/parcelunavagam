import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';
import { TransactionComponent } from './transaction/transaction.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { SettingComponent } from './setting/setting.component';
import { SalesSummaryComponent } from './sales-summary/sales-summary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SalesComponent,
    TransactionComponent,
    DeliveryComponent,
    SettingComponent,
    SalesSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
