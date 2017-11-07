import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './youtube/search-box.component';
import { SearchResultComponent } from './youtube/search-result.component';
import { YouTubeSearchComponent } from './youtube/you-tube-search-component';
import { youTubeSearchInjectables } from './youtube/you-tube-search-injectables';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    YouTubeSearchComponent,
    SearchResultComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [youTubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
