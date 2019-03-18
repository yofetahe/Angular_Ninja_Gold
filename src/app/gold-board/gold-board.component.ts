import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-gold-board',
  templateUrl: './gold-board.component.html',
  styleUrls: ['./gold-board.component.css']
})
export class GoldBoardComponent implements OnInit {
  
  results: any;
  title = 'NinjaGold';
  totalResult: number;

  constructor(private data: DataServiceService) {
    this.results= [];
    this.totalResult = 0;
  }

  ngOnInit() {
    // this.data.resultList.subscribe(result => this.results = result);
  }

  checkFarmGold(){    
    var min=2; 
    var max=5;  
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    this.totalResult += random;
    this.results.push("You earned " + random + " gold at the cave.");
    this.data.getChengeResult(this.results);
    this.data.getTotalResult(this.totalResult);
  }

  checkCaveGold(){
    var min=5; 
    var max=10;  
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    this.totalResult += random;
    this.results.push("You earned " + random + " gold at the cave.");
    this.data.getChengeResult(this.results);
    this.data.getTotalResult(this.totalResult);
  }
  
  checkHouseGold(){
    var min=7; 
    var max=15;  
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    this.totalResult += random;
    this.results.push("You earned " + random + " gold at the cave.");
    this.data.getChengeResult(this.results);
    this.data.getTotalResult(this.totalResult);
  }

  checkCasinoGold(){
    var i = 0;
    var j = 2;
    var probablity = Math.floor(Math.random() * (+j - +i)) + +i;
    var min=2; 
    var max=100;  
    var random = Math.floor(Math.random() * (+max - +min)) + +min;

    if(probablity == 1){
      this.totalResult += random;
      this.results.push("You earn " + random + " gold at the cave.");
    } else {
      this.totalResult -= random;
      this.results.push("You lose " + random + " gold at the cave.");
    }
    this.data.getChengeResult(this.results);
    this.data.getTotalResult(this.totalResult);
  }
}
