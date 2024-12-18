import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-summary',
  templateUrl: './sales-summary.component.html',
  styleUrls: ['./sales-summary.component.css']
})
export class SalesSummaryComponent {
  items : any[]= [
    {'id' : 1,'item_name' : 'Idly', 'amount' : 10, 'count' : 6},
    {'id' : 2,'item_name' : 'Dosai', 'amount' : 60, 'count' : 2}
  ]
}
