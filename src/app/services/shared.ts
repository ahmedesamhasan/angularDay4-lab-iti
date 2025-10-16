import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, map, Observable, Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class SharedService {
  private note = 'init';
  setNote(v: string) {
    this.note = v;
  }
  getNote() {
    return this.note;
  }
  status$: Observable<number> = interval(1000).pipe(map((x) => x + 1));
  private msg$ = new Subject<string>();
  send(message: string) {
    this.msg$.next(message);
  }
  messages(): Observable<string> {
    return this.msg$.asObservable();
  }
  private userBS = new BehaviorSubject<string>('Guest');
  user$ = this.userBS.asObservable();
  setUser(name: string) {
    this.userBS.next(name || 'Guest');
  }
}
