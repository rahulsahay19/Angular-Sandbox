import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { SearchResult } from './SearchResult';
import { YouTubeSearchService } from './youtube-search-service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';

@Component({
    selector: 'app-search-box',
    template: `
    <input type="text" class="form-control" placeholder="Search" autofocus>
  `
})

export class SearchBoxComponent implements OnInit {
    @Output() loading:EventEmitter<boolean>=new EventEmitter<boolean>();
    @Output() results:EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

    constructor(private youtube:YouTubeSearchService, private el:ElementRef) { }

    ngOnInit():void {
        // convert the `keyup` event into an observable stream
        Observable.fromEvent(this.el.nativeElement,'keyup')
        .map((e:any) => e.target.value) //extracting the value of the input
        .filter((text:string)=>text.length>1) //filter out if empty
        .debounceTime(250) // only once every 250ms
        .do(()=>this.loading.next(true)) //enable loading
        //search, discard old events, if new comes up
        .map((query:string)=>this.youtube.search(query))
        .switch()
        //act on the return of event
        .subscribe(
            (results:SearchResult[])=>{
                //On Success
                this.loading.next(false);
                this.results.next(results);
            },
            (err:any)=>{
                //On Error
                console.log(err);
                this.loading.next(false);
            },
            ()=>{
                //On Completion
                this.loading.next(false);
            }
        )
     }

    
}