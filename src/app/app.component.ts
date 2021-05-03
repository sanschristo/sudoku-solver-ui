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
  board: Board = JSON.parse(JSON.stringify(hardGames[0]));

  solve() {
    const game = new Game(this.board);
    game.solve();
    game.logBoard();
  }

  chooseGame(difficulty: 'hard' | 'med' | 'easy', gameNumber: number) {
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
}
