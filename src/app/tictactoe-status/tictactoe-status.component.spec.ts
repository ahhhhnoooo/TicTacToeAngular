import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TictactoeStatusComponent } from './tictactoe-status.component';

describe('TictactoeStatusComponent', () => {
  let component: TictactoeStatusComponent;
  let fixture: ComponentFixture<TictactoeStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TictactoeStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TictactoeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
