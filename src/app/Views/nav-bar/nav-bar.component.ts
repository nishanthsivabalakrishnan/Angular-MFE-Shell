import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
/**
 *
 */
constructor(private router: Router) { 
}
aboutClick(){
  this.router.navigateByUrl('/management/about');
}
contactUsClick(){
  this.router.navigateByUrl('/management/contact-us');
}
homeClick(){
  this.router.navigateByUrl('/');
}
}
