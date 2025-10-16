import { Component } from '@angular/core';
import { SharedService } from '../../services/shared';
@Component({
  selector: 'app-logger',
  standalone: false,
  templateUrl: './logger.html',
  styleUrl: './logger.css',
})
export class Logger {
  last = '';
  constructor(shared: SharedService) {
    shared.messages().subscribe((m) => (this.last = m));
  }
}
