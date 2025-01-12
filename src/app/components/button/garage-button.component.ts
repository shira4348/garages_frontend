import { Component, Output, EventEmitter } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-garage-button',
  templateUrl: './garage-button.component.html',
  styleUrls: ['./garage-button.component.css'],
  imports: [MatButtonModule],
})
export class GarageButtonComponent {
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}