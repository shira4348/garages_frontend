import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 



@Component({
  selector: 'app-garage-select',
  templateUrl: './garage-select.component.html',
  imports: [MatSelectModule, MatOptionModule, CommonModule,FormsModule], 
  styleUrls: ['./garage-select.component.css']
  
})
export class GarageSelectComponent {
  @Input() garages: any[] = []; 
  @Output() selectionChange = new EventEmitter<any[]>(); 
  selectedGarages: any[] = [];

  onSelectionChange() {
    this.selectionChange.emit(this.selectedGarages);
  }
}
