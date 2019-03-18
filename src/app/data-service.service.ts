import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private resultListSource = new BehaviorSubject('ResultSource');
  resultList = this.resultListSource.asObservable();

  private totalResultSource = new BehaviorSubject('0');
  totalResult = this.totalResultSource.asObservable();

  constructor() { }

  getChengeResult(results: any){
    this.resultListSource.next(results);
  }

  getTotalResult(totalPoint: any){
    this.totalResultSource.next(totalPoint);
  }
}
