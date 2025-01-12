import { Component, Input , Output, EventEmitter} from '@angular/core';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-garage-table',
  templateUrl: './garage-table.component.html',
  styleUrls: ['./garage-table.component.css'],
  imports:[MatTableModule],
})
export class GarageTableComponent {
  @Input() garages: any[] = []; 
  @Output() deleteGarage = new EventEmitter<any>();


  displayedColumns: string[] = ['shem_mosah', 'miktzoa', 'yishuv', 'telephone', 'delete'];

  onDelete(garage: any) {
    this.deleteGarage.emit(garage);
  }
}
