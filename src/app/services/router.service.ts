import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Subject, Observable, BehaviorSubject, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  currentURLObserver = new Subject<boolean>()
  currentURL$ = new Observable();
  constructor() {
    this.currentURL$ = this.currentURLObserver.asObservable();
  }

  

}
