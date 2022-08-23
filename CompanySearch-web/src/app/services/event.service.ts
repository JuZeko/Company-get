import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private subject = new BehaviorSubject<string>('burger');

  constructor() {}

  sendMessage(message: string) {
    this.subject.next(message);
  }

  receivedMessage(): Observable<string> {
    return this.subject.asObservable();
  }
}
