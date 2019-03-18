import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoldPointComponent } from './gold-point/gold-point.component';
import { GoldBoardComponent } from './gold-board/gold-board.component';
import { GoldResultComponent } from './gold-result/gold-result.component';

@NgModule({
  declarations: [
    AppComponent,
    GoldPointComponent,
    GoldBoardComponent,
    GoldResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
