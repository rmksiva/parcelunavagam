import { Component } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {
  totalCount = 0;
  totalAmount = 0;
  updateSummary(){
    this.totalAmount = 0;
    this.totalCount = 0;
    this.items.forEach(element => {
      this.totalCount = this.totalCount + element.count;
      this.totalAmount = this.totalAmount + (element.amount * element.count);
    });
    console.log('Summary updated');
  }
AddToCart(id: number) {
this.items.forEach(element => {
  console.log('Add item');
  if(element.id==id)
  {
    console.log('Add item ' + element.item_name + ' ' + element.count);
    element.count = 1;
  }
});
this.updateSummary();
}
AddMoreItemToCart(id: number) {
  this.items.forEach(element => {
    if(element.id==id)
    {
      element.count = element.count+1;
    }
  });
  this.updateSummary();
  }
  RemoveItemFromCart(id: number) {
    this.items.forEach(element => {
      if(element.id==id)
      {
        element.count = element.count-1;
      }
    });
    this.updateSummary();
    }
    RemoveAllItemFromCart() {
      this.items.forEach(element => {
        element.count=0;
      });
      this.updateSummary();
      }
items : any[]= [
  {'id' : 1,'item_name' : 'Idly', 'amount' : 10, 'count' : 0},
  {'id' : 2,'item_name' : 'Dosai', 'amount' : 60, 'count' : 0},
  {'id' : 3,'item_name' : 'Chappathi', 'amount' : 15, 'count' : 0}
]

}
