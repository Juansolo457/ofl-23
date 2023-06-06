import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {
  private dataSource = new BehaviorSubject<any[]>([]);
  data = this.dataSource.asObservable();

  addData(data: any) {
    const currentValue = this.dataSource.value;
    this.dataSource.next([...currentValue, data]);
  }  constructor() { }
}
