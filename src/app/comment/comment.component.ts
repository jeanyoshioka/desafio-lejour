import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NpsService } from '../nps.service';
import { CookieService } from '../cookie.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  providers: [ NpsService, CookieService ],
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {
  @Input() id: String;
  @Input() score: Number;
  @Output() submit = new EventEmitter();
  comment: String = '';
  sending: Boolean = false;

  constructor(private npsService: NpsService, private cookieService: CookieService) { }

  ngOnInit() {
  }

  getEmoji(score: Number) {
    if (score > 8) return 'very-happy'
    if (score > 6) return 'happy'
    if (score > 4) return 'neutral'
    if (score > 2) return 'angry'
    if (score >= 0) return 'very-angry'
  }

  onKey(value: String): void {
    this.comment = value;
  }

  onSubmit(): void {
    this.sending = true;
    const body = {
      "id": this.id,
      "comment": this.comment
    };
    this.npsService.saveComment(body)
      .subscribe(res => {
        this.sending = false;
        this.cookieService.setCookie('user', this.id, 7);
        this.submit.emit();
      });
  }

}
