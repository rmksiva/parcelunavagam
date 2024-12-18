import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';
import { TransactionComponent } from './transaction/transaction.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { SettingComponent } from './setting/setting.component';
import { SalesSummaryComponent } from './sales-summary/sales-summary.component';

const routes: Routes = [
  {path:'home', component :HomeComponent},
  {path:'sales', component :SalesComponent},
  {path:'summary', component :SalesSummaryComponent},
  {path:'transaction', component :TransactionComponent},
  {path:'delivery', component :DeliveryComponent},
  {path:'setting', component :SettingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
