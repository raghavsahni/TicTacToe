import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  timeLeft: number = 5;
  interval;
  isTimer: boolean = false;

  constructor() { 
    this.startTimer();
  }

  ngOnInit(): void {
  }

  startTimer() {
    debugger
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.isTimer = false;
        this.timeLeft--;
      } else {


        this.isTimer = true;

        this.timeLeft = 5;
      }
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}
