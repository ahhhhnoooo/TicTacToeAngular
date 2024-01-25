export class TicTacToeGameState {
    board: string[]
    winner: string
    turn: string

    constructor() {
        this.board = Array(9).fill('');
        this.winner = '';
        this.turn = 'x';  
    }
}