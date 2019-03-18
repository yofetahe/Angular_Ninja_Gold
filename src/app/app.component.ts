import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'NinjaGold';
  resultsList: any;
  totalResult: string;

  constructor(private data: DataServiceService){ }

  ngOnInit(){
    this.data.resultList.subscribe(result => this.resultsList = result);
    this.data.totalResult.subscribe(total => this.totalResult = total);
  }

  // checkFarmGold(){
  //   var min=2; 
  //   var max=5;  
  //   var random = Math.floor(Math.random() * (+max - +min)) + +min;
  //   this.totalResult += random;
  //   this.results.push("You earned " + random + " gold at the cave.");
  // }

  // checkCaveGold(){
  //   var min=5; 
  //   var max=10;  
  //   var random = Math.floor(Math.random() * (+max - +min)) + +min;
  //   this.totalResult += random;
  //   this.results.push("You earned " + random + " gold at the cave.");
  // }
  
  // checkHouseGold(){
  //   var min=7; 
  //   var max=15;  
  //   var random = Math.floor(Math.random() * (+max - +min)) + +min;
  //   this.totalResult += random;
  //   this.results.push("You earned " + random + " gold at the cave.");
  // }

  // checkCasinoGold(){
  //   var i = 0;
  //   var j = 2;
  //   var probablity = Math.floor(Math.random() * (+j - +i)) + +i;
  //   var min=2; 
  //   var max=100;  
  //   var random = Math.floor(Math.random() * (+max - +min)) + +min;

  //   if(probablity == 1){
  //     this.totalResult += random;
  //     this.results.push("You earn " + random + " gold at the cave.");
  //   } else {
  //     this.totalResult -= random;
  //     this.results.push("You lose " + random + " gold at the cave.");
  //   }
  // }

}
