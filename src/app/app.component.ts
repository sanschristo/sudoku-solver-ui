import { Component } from '@angular/core';
import { Board, Game } from '@sanschristo/sudoku-solver';
import { hardGames } from '@sanschristo/sudoku-solver/build/dist/src/sample-games/hard';
import { mediumGames } from '@sanschristo/sudoku-solver/build/dist/src/sample-games/medium';
import { easyGames } from '@sanschristo/sudoku-solver/build/dist/src/sample-games/easy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  board: Board = JSON.parse(JSON.stringify(easyGames[0]));
  steps: Board[] = [];
  solving = false;
  showSteps = true;

  constructor() {
  }

  async solve(ms: number = 100) {
    this.solving = false;
    const game = new Game(JSON.parse(JSON.stringify(this.board)));
    game.solve();
    game.logBoard();

    this.steps = game.steps;

    if (this.showSteps) {
      this.solving = true;
      for (const step of this.steps) {
        if (this.solving) {
          await this.wait(ms);
          this.board = step;
        }
      }
      this.solving = false;
    } else {
      this.board = game.board;
    }
  }

  async chooseGame(difficulty: 'hard' | 'med' | 'easy', gameNumber: number) {
    this.solving = false;
    await this.wait(150);
    switch (difficulty) {
      case 'hard':
        this.board = JSON.parse(JSON.stringify(hardGames[gameNumber]));
        break;
      case 'med':
        this.board = JSON.parse(JSON.stringify(mediumGames[gameNumber]));
        break;
      case 'easy':
        this.board = JSON.parse(JSON.stringify(easyGames[gameNumber]));
        break;
    }
  }

  wait(ms: number) {
    return new Promise(resolve => {setTimeout(resolve, ms)});
  }
}
