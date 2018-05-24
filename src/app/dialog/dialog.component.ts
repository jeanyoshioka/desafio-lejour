import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent implements OnInit {
  @Input() id: String;
  @Input() score: Number;
  @Output() close = new EventEmitter();
  @Output() submit = new EventEmitter();
  comment: String = '';
  submitted: Boolean = false;
  transition: Boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.transition = true
    }, 0)
  }

  closeDialog(): void {
    this.transition = false
    setTimeout(() => {
      this.close.emit();
    }, 300)
  }

  submitScore(): void {
    this.submitted = true
    this.submit.emit();
  }
}
