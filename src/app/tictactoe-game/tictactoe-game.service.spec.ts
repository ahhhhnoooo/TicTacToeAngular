import { TestBed } from '@angular/core/testing';

import { TictactoeGameService } from './tictactoe-game.service';

describe('TictactoeGameService', () => {
  let service: TictactoeGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TictactoeGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
