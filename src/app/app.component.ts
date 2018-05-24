import { Component, OnInit } from '@angular/core';
import { NpsService } from './nps.service';
import { CookieService } from './cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ NpsService, CookieService ],
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'app';
  id: String = null;
  score: Number = null;
  submitted: Boolean = false;
  loading: Boolean = true;

  constructor(private npsService: NpsService, private cookieService: CookieService) { }

  ngOnInit() {
    this.showNps();
  }

  onChoose(score: Number) {
    this.score = score
    const body = {
      "score": score
    }
    this.loading = true
    this.npsService.saveScore(body)
      .subscribe(res => {
        this.loading = false
        this.id = res.data.id
      });
  }

  onClose() {
    this.id = null
    this.score = null
  }

  onSubmitted() {
    this.submitted = true
  }

  showNps() {
    this.loading = true
    this.npsService.getNps()
      .subscribe(res => {
        let obj = res.data
        if (obj.hasOwnProperty(this.cookieService.getCookie('user')))
          this.submitted = true

        this.loading = false
      });
  }
}
