import { Component, OnInit } from '@angular/core';
import { GameSpaceComponent } from '../game-space/game-space.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [CommonModule, GameSpaceComponent],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.css'
})
export class GameBoardComponent implements OnInit {

  spaces: string[] = [];
  winner: string = '';
  turn: string = 'x';

  ngOnInit(): void {
    this.turn = 'x';
    this.winner = '';
    this.spaces = [];
    for (let i = 0; i < 9; ++i){
      this.spaces.push('');
    }
  }

  onClickSpace(index: number): void {
    if (this.winner === '') {
      this.spaces[index] = this.turn;
      this.winner = this.checkWinner();
      this.turn = this.turn === 'x' ? 'o' : 'x';
    }
  }

  private checkWinner(): string {
    if (
        (this.turn === this.spaces[0] && this.turn === this.spaces[1] && this.turn === this.spaces[2]) ||
        (this.turn === this.spaces[3] && this.turn === this.spaces[4] && this.turn === this.spaces[5]) ||
        (this.turn === this.spaces[6] && this.turn === this.spaces[7] && this.turn === this.spaces[8]) ||
        (this.turn === this.spaces[0] && this.turn === this.spaces[3] && this.turn === this.spaces[6]) ||
        (this.turn === this.spaces[1] && this.turn === this.spaces[4] && this.turn === this.spaces[7]) ||
        (this.turn === this.spaces[2] && this.turn === this.spaces[5] && this.turn === this.spaces[8]) ||
        (this.turn === this.spaces[0] && this.turn === this.spaces[4] && this.turn === this.spaces[8]) ||
        (this.turn === this.spaces[2] && this.turn === this.spaces[4] && this.turn === this.spaces[6])) {
        console.log(this.turn, "WINS");
        return this.turn;
    } else {
      return '';
    }
  }
}
