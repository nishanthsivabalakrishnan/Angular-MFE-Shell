import { Routes } from '@angular/router';
import { AuthGuardGuard } from './Guard/auth-guard.guard';
import { AboutComponent } from './Views/about/about.component';
import { HomeComponent } from './Views/home/home.component';
import { LoginComponent } from './Views/login/login.component';
import { NotfoundComponent } from './Views/notfound/notfound.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('Remote-1/Module').then((m) => m.ExportModule)
  },
  {
    path:'management',
    loadChildren:() => import('Remote-2/Module').then((m)=> m.ExportModule),canActivate:[AuthGuardGuard]
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];
export class AppRoutingModule {}
