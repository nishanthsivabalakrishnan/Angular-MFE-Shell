import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../Services/Authentication/authentication.service';
import { NotificationService } from '../Services/Notification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private auhenticationServie: AuthenticationService,
    private router: Router,
    private notification: NotificationService,
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.getItem('token')) {
      var informations = this.auhenticationServie.RetriveTokenInformation();
      if (+informations.Role == 1 || +informations.Role == 3 || +informations.Role == 4) {
        return true;
      } else {
        this.notification.ErrorNotification('You have no permission to access!.');
        this.auhenticationServie.Logout();
        return false;
      }
    } else {
      this.notification.ErrorNotification('Please login to your account');
      this.router.navigate(['auth/login']);
      return false;
    }
  }  
}
