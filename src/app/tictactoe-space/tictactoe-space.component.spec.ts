import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TictactoeSpaceComponent } from './tictactoe-space.component';

describe('TictactoeSpaceComponent', () => {
  let component: TictactoeSpaceComponent;
  let fixture: ComponentFixture<TictactoeSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TictactoeSpaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TictactoeSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
