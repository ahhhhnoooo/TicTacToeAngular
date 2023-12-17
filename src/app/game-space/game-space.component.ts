import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-space',
  standalone: true,
  imports: [],
  templateUrl: './game-space.component.html',
  styleUrl: './game-space.component.css'
})
export class GameSpaceComponent {
  @Input() value: string = '';
  //This whole component is unnecessary, but want it for @Input and stuff
}
