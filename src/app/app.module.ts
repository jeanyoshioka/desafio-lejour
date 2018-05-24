import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { CommentComponent } from './comment/comment.component';
import { ScrollheightDirective } from './scrollheight.directive';
import { SuccessComponent } from './success/success.component';
import { DialogComponent } from './dialog/dialog.component';
import { SubmittedComponent } from './submitted/submitted.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    CommentComponent,
    ScrollheightDirective,
    SuccessComponent,
    DialogComponent,
    SubmittedComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
