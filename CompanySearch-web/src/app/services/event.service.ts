import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private subject = new BehaviorSubject<boolean>(true);

  constructor() {}

  sendMessage(message: boolean) {
    this.subject.next(message);
  }

  receivedMessage(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
