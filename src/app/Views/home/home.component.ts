import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/Services/Notification/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private router: Router,private toaster:
  NotificationService) { 
}
onLoginClick(){
  this.router.navigateByUrl('/auth/login');
}
contactUsClick(){
  this.toaster.SuccessNotification('Welcome');
  // this.router.navigateByUrl('/management/contact-us');
}
}
