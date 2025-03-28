import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicTacToeGameService } from '../tictactoe-game/tictactoe-game.service';

@Component({
    selector: 'app-tictactoe-board',
    imports: [CommonModule],
    templateUrl: './tictactoe-board.component.html',
    styleUrl: './tictactoe-board.component.css'
})
export class TictactoeBoardComponent implements OnInit {

  gameBoard: string[] = [];
  constructor(
    private ticTacToeGameService: TicTacToeGameService,
  ) {}

  ngOnInit(): void {
    this.ticTacToeGameService.gameState$.subscribe((state) => {
      this.gameBoard = state.board;
    })
  }

  onClick(index: number): void {
    this.ticTacToeGameService.onClickSpace(index);
  }
}