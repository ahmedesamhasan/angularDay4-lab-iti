import { Component } from '@angular/core';
import { SharedService } from '../../services/shared';
@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  user = '';
  tick = 0;
  constructor(shared: SharedService) {
    shared.user$.subscribe((u) => (this.user = u));
    shared.status$.subscribe((t) => (this.tick = t));
  }
}
