import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private tasks = new BehaviorSubject<any>(['The intial task', 'Another task to do']);
  task = this.tasks.asObservable();

  constructor() { }

  changeTask(task) {
    this.tasks.next(task);
  }

}
