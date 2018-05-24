import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.sass']
})
export class ScoreComponent implements OnInit {
  @Output() choose = new EventEmitter<Number>();
  selectedScore: Number;
  scores: Array<Number>;

  constructor() { }

  ngOnInit() {
    this.buildScores();
  }

  buildScores(): void {
    this.scores = Array(11).fill(0).map((x, i) => i);
  }

  setScore(score: Number): void {
    this.selectedScore = score;
    this.choose.emit(score);
  }

}
