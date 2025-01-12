import { Component, OnInit } from '@angular/core';
import { GarageService } from '../../services/garage.service';
import { GarageTableComponent } from '../table/garage-table.component';
import { GarageSelectComponent } from '../select/garage-select.component';
import { GarageButtonComponent } from '../button/garage-button.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';


import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css'],
  imports: [
    MatCardModule,
    GarageTableComponent,
    GarageSelectComponent,
    GarageButtonComponent,
    CommonModule,
  ],
})
export class GarageComponent implements OnInit {
  appGarages: any[] = [];
  governmentGarages: any[] = [];
  selectedGarages: any[] = [];
  filteredGarages: any[] = [];

  constructor(
    private garageService: GarageService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.loadAppGarages();
    this.loadGovernmentGarages();
  }

  loadAppGarages() {
    this.garageService.getAppGarages().subscribe((data) => {
      this.appGarages = data;
      this.filterGarages();
    });
  }

  loadGovernmentGarages() {
    this.garageService.getGovernmentGarages().subscribe((data) => {
      this.governmentGarages = data;
      this.filterGarages();
    });
  }

  filterGarages() {
    this.filteredGarages = this.governmentGarages.filter(
      (garage) =>
        !this.appGarages.some((appGarage) => appGarage._id === garage._id)
    );
  }

  updateSelectedGarages(selected: any[]) {
    this.selectedGarages = selected;
  }

  saveSelectedGarages() {
    this.garageService.saveGarages(this.selectedGarages).subscribe({
      next: (response) => {
        console.log('Garages saved successfully', response);
        this.loadGovernmentGarages();
        this.loadAppGarages();
      },
      error: (error) => {
        console.error('Error saving garages', error);
      },
    });
  }

  onDeleteGarage(garage: any) {
    this.garageService.deleteGarage(garage._id).subscribe(() => {
      this.loadAppGarages();
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
