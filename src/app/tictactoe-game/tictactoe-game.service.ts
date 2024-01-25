import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TicTacToeGameState } from './tictactoe-game';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeGameService {
  private gameState = new BehaviorSubject<TicTacToeGameState>(new TicTacToeGameState());
  public gameState$: Observable<TicTacToeGameState> = this.gameState.asObservable();

  constructor() { }

  reset(): void {
    this.gameState.next(new TicTacToeGameState());
  }
  onClickSpace(index: number): void {
    let game = this.gameState.value;
    if (game.winner === '') {
      //Make a new copy of the gameState, do not modify state
      let result: TicTacToeGameState = {
        board: game.board,
        winner: '',
        turn: game.turn
      }
      //Mark the move
      result.board[index] = result.turn;
      //Check for a winner
      result.winner = this.checkWinner(result.board, result.turn);
      //If nobody won, set next turn
      if (result.winner === '') {
        result.turn = this.nextTurn(result.turn);
      }
      this.gameState.next(result);
    }
  }

  checkWinner(board: string[], turn: string): string {
    if (
      (turn === board[0] && turn === board[1] && turn === board[2]) ||
      (turn === board[3] && turn === board[4] && turn === board[5]) ||
      (turn === board[6] && turn === board[7] && turn === board[8]) ||
      (turn === board[0] && turn === board[3] && turn === board[6]) ||
      (turn === board[1] && turn === board[4] && turn === board[7]) ||
      (turn === board[2] && turn === board[5] && turn === board[8]) ||
      (turn === board[0] && turn === board[4] && turn === board[8]) ||
      (turn === board[2] && turn === board[4] && turn === board[6])) {
      console.debug(turn, " WINS");
      return turn;
    } else {
      return '';
    }
  }

  nextTurn(turn: string): string {
    return (turn === 'x') ? 'o' : 'x';
  }
}
