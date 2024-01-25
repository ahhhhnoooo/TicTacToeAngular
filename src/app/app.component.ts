import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TictactoeBoardComponent } from './tictactoe-board/tictactoe-board.component';
import { TictactoeStatusComponent } from './tictactoe-status/tictactoe-status.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TictactoeBoardComponent, TictactoeStatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TicTacToeAngular';
}
