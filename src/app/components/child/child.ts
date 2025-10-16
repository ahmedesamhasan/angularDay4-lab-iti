import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() userName!: string;
  @Output() onNotify = new EventEmitter<string>();
  notify() {
    this.onNotify.emit('Message from child');
  }
}
