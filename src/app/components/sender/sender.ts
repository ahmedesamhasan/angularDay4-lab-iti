import { Component } from '@angular/core';
import { SharedService } from '../../services/shared';
@Component({
  selector: 'app-sender',
  standalone: false,
  templateUrl: './sender.html',
  styleUrl: './sender.css',
})
export class Sender {
  constructor(private shared: SharedService) {}
  send(v: string) {
    this.shared.send(v);
  }
  login(u: string) {
    this.shared.setUser(u);
  }
}
