import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NpsService {
  lejourUrl = 'https://staging-api.lejour.com.br/portal/api/v2/nps/'

  constructor(private http: HttpClient) { }

  getNps() {
    return this.http.get<Nps>(this.lejourUrl);
  }

  saveScore(body) {
    return this.http.post<Score>(this.lejourUrl, body);
  }

  saveComment(body) {
    return this.http.post<Comment>(this.lejourUrl, body);
  }
}

export interface Nps {
  code: Number;
  reason: String;
  data: Object;
}

export interface Score {
  code: Number;
  reason: String;
  data: {
    id: String,
    resposta: Boolean
  };
}

export interface Comment {
  code: Number;
  reason: String;
  data: Boolean;
}