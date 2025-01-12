import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

import { RouterModule } from '@angular/router'; // Import RouterModule
import { HttpClientModule } from '@angular/common/http'; // For API calls

import { AppComponent } from './app.component';
import { GarageComponent } from './components/garage/garage.component';

import { AuthGuard } from './guards/auth.guard'; // Auth Guard
import { routes } from './app.routes'; // Routes configuration
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [AppComponent, GarageComponent, LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
