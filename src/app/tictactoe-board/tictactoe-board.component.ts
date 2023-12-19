import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TictactoeSpaceComponent } from '../tictactoe-space/tictactoe-space.component';
declare class TicTacToeGame {
  static onClick(game: TicTacToeGameState, index: number): TicTacToeGameState;
}

@Component({
  selector: 'app-tictactoe-board',
  standalone: true,
  imports: [CommonModule, TictactoeSpaceComponent],
  templateUrl: './tictactoe-board.component.html',
  styleUrl: './tictactoe-board.component.css'
})
export class TictactoeBoardComponent {
  game: TicTacToeGameState = {
    board: Array(9).fill(''),
    winner: '',
    turn: 'x'
  }

  onClickSpace(index: number): void {
    this.game = TicTacToeGame.onClick(this.game, index);
  }
}
interface TicTacToeGameState {
  board: string[],
  winner: string,
  turn: string
}