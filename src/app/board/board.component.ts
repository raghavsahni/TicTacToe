import { Component, ViewChildren, QueryList } from '@angular/core';
import { SquareComponent } from '../square/square.component';
import { Movement } from '../models/movement';


@Component({
selector: 'board',
templateUrl: './board.component.html',
styleUrls: ['./board.component.css']

})
export class BoardComponent {
@ViewChildren(SquareComponent) private squares: QueryList<SquareComponent>;
movementHistory: Movement[] = [];
currentPlayer: string = 'X';
hasGameStarted: boolean = false;
hasGameFinished: boolean = false;
finishedAsDraw: boolean = false;
// resBool: boolean = false;
// resultName : string = '';
name1: string = '';
name2: string = '';
start: boolean = false;
i: number = 0;

timeLeft: number = 5;
interval;
isTimer : boolean = false;


ngDoCheck() {
if (this.timeLeft === 0) {
this.hasGameFinished = true;
this.pauseTimer();
this.disableAllSquares();
}
}

winningCombinations = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];


handleSquareClick(squareNumber: number) {
this.hasGameStarted = true;
const square = this.getSquare(squareNumber);
this.movementHistory.push({
player: this.currentPlayer,
squareNumber: square.squareNumber
});

square.text = this.currentPlayer;
square.enabled = false;

if (this.hasCurrentPlayerWon()) {
this.hasGameFinished = true;
this.pauseTimer();
this.disableAllSquares();
} else if (this.hasDrawHappend()) {
this.finishedAsDraw = true;
this.pauseTimer();
} else {
this.currentPlayer = (this.currentPlayer === 'X') ? 'O' : 'X';
if (this.currentPlayer === 'X') {
this.timeLeft = 5;
this.pauseTimer();
this.startTimer();
} else {
this.timeLeft = 5;
this.pauseTimer();
this.startTimer();
}
}
}

restart() {
this.timeLeft = 5;
this.hasGameStarted = false;
this.hasGameFinished = false;
this.finishedAsDraw = false;
this.currentPlayer = 'X';
this.movementHistory = [];
this.name1 = '';
this.name2 = '';
this.start = false;
this.squares.forEach((square) => {
square.text = '';
square.enabled = true;

})

}
onStart() {
this.start = true;
}

private getSquare(squareNumber: number): SquareComponent {
return this.squares.find((square) => square.squareNumber == squareNumber);
}

private hasCurrentPlayerWon(): boolean {
const currentPlayerMovements = this.movementHistory.filter((move) => move.player === this.currentPlayer);

for (let i = 0; i < this.winningCombinations.length; i++) {
const [a, b, c] = this.winningCombinations[i];
const matchingMovements = currentPlayerMovements.filter((move) =>
move.squareNumber === a ||
move.squareNumber === b ||
move.squareNumber === c);

if (matchingMovements.length === 3) {
return true;
}
}

return false;
}

private hasDrawHappend() {
return this.movementHistory.length === 9;
}

private disableAllSquares() {
this.squares.forEach((square) => {
square.enabled = false;
});
}


startTimer() {
this.interval = setInterval(() => {
if (this.timeLeft > 0) {
this.isTimer = false;
this.timeLeft--;
} else {
console.log("IIII");

this.isTimer = true;
// this.currentPlayer == this.name1 ? this.currentPlayer = this.name2 : this.currentPlayer = this.name1;
// console.log(this.currentPlayer);
this.timeLeft = 5;
}
}, 1000)
}

pauseTimer() {
clearInterval(this.interval);
}


}