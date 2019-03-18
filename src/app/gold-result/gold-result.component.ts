import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-gold-result',
  templateUrl: './gold-result.component.html',
  styleUrls: ['./gold-result.component.css']
})
export class GoldResultComponent implements OnInit {

  resultList: any;
  
  constructor(private data: DataServiceService) { }

  ngOnInit() {
    this.data.resultList.subscribe(result => this.resultList = result)
  }

}
