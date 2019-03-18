import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-gold-point',
  templateUrl: './gold-point.component.html',
  styleUrls: ['./gold-point.component.css']
})
export class GoldPointComponent implements OnInit {

  totalPoint: string;

  constructor(private data: DataServiceService) { }

  ngOnInit() {
    this.data.totalResult.subscribe(total => this.totalPoint = total);
  }

}
