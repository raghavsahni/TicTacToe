import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { CountdownModule } from 'ngx-countdown';
import { TimerComponent } from './board/timer/timer/timer.component';
// import { CountdownTimerModule } from 'ngx-countdown-timer';
 

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CountdownModule,
    // CountdownTimerModule,
    // CountdownTimerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
