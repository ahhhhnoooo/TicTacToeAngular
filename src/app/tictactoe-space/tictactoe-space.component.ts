import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tictactoe-space',
  standalone: true,
  imports: [],
  templateUrl: './tictactoe-space.component.html',
  styleUrl: './tictactoe-space.component.css'
})
export class TictactoeSpaceComponent {
  @Input() value: string = '';
  //This whole component is unnecessary, but want it for @Input and stuff
}
