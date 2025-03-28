import { Component, OnInit } from '@angular/core';
import { TicTacToeGameService } from '../tictactoe-game/tictactoe-game.service';

@Component({
    selector: 'app-tictactoe-status',
    imports: [],
    template: `
      <p>Turn: {{turn}}</p>
      <p>Winner: {{winner}}</p>
    `
})
export class TictactoeStatusComponent implements OnInit {

  turn: string = '';
  winner: string = '';

  constructor(
    private ticTacToeGameService: TicTacToeGameService
  ) {}

  ngOnInit(): void {
    this.ticTacToeGameService.gameState$.subscribe((state) => {
      this.turn = state.turn;
      this.winner = state.winner;
    })
  }
}
