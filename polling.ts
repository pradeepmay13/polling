import { Component, OnInit } from '@angular/core';
import { timer, from, of, Observable, pipe } from 'rxjs'
import { map, concatMap, filter, take, mergeMap, merge } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private readonly http: HttpClient) {}
    public pollingTask() {
    const httpUrl = this.http.get('http://localhost:3004/posts');
    timer(0, 1000)
      .pipe(concatMap(() => httpUrl),
        map((response) => response)
      )
      .pipe(filter((result: any) => result.status === false))
      .pipe(take(1))
      .subscribe((response) => console.log(response));
    }
}
