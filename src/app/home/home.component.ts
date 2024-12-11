import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router:Router){

  }
  openOption(id: number) {
    switch(id) {
      case 1:
        this.router.navigate(['/sales'])
        break;
      case 2:
        this.router.navigate(['/transaction'])
        break;
      case 3:
        this.router.navigate(['/delivery'])
        break;
      case 4:
        this.router.navigate(['/setting'])
        break;
      default:
        this.router.navigate(['/home'])
    }
  
  }

}
