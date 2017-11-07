import { Component, OnInit } from '@angular/core';
import { SearchResult } from './SearchResult';

@Component({
    selector: 'app-you-tube-search',
    templateUrl: './you-tube-search.component.html'
})

export class YouTubeSearchComponent implements OnInit {
    results: SearchResult[];
    loading: boolean;
  
    constructor() { }
    ngOnInit() { }
  
    updateResults(results: SearchResult[]): void {
      this.results = results;
      // console.log("results:", this.results); // uncomment to take a look
    }
}