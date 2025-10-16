import { Component } from '@angular/core';
import { SharedService } from '../../services/shared';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.html',
  styleUrls: ['./parent.css'],
})
export class Parent {
  userName: string = 'Ahmed';
  message = '';
  constructor(private shared: SharedService) {}
  handleMessage(msg: string) {
    this.message = msg;
  }
  saveNote() {
    this.shared.setNote(this.userName);
  }
  readNote() {
    this.userName = this.shared.getNote();
  }
}
