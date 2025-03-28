import { fakeAsync, flush, TestBed } from '@angular/core/testing';

import { TicTacToeGameService } from './tictactoe-game.service';
import { TicTacToeGameState } from './tictactoe-game';

describe('TicTacToeGameService', () => {
  let service: TicTacToeGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicTacToeGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should nextTurn', () => {
    expect(service.nextTurn('x')).toBe('o');
    expect(service.nextTurn('o')).toBe('x');
  });

  it('should checkWinner', () => {
    expect(service.checkWinner(['o','o','o','','','','','',''],'o')).toBe('o');
    expect(service.checkWinner(['','o','o','o','','','','',''],'o')).toBe('');
    expect(service.checkWinner(['','','o','o','o','','','',''],'o')).toBe('');
    expect(service.checkWinner(['','','','o','o','o','','',''],'o')).toBe('o');
    expect(service.checkWinner(['','','','','o','o','o','',''],'o')).toBe('');
    expect(service.checkWinner(['','','','','','o','o','o',''],'o')).toBe('');
    expect(service.checkWinner(['','','','','','','o','o','o'],'o')).toBe('o');
    expect(service.checkWinner(['','','','','','','','',''],'o')).toBe('');
  });

  it('should reset', fakeAsync(() => {
    const expected = new TicTacToeGameState();
    service.gameState$.subscribe((state) => {
      expect(state).toEqual(expected);
    })
    service.reset();
    flush();
  }));
});
