import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { GarageComponent } from './components/garage/garage.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'garages',
    canActivate: [AuthGuard],
    component: GarageComponent,
  },

  { path: '**', redirectTo: 'garages' },
];
