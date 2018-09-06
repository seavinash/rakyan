import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Cacheable } from 'ngx-cacheable';

import { HomeModel } from '../models/homemodel';
import { TraditionModel } from '../models/traditionmodel';

@Injectable({
    providedIn: 'root'
})
export class RakyanService {
    private homeApiUrl: string = 'http://dev.di91.com/rakyan/wp-admin/admin-ajax.php/?action=get_home_data';
    private ourTraditionApiUrl: string = 'http://dev.di91.com/rakyan/wp-admin/admin-ajax.php/?action=get_our_tradition_data';
    private url: string = 'http://localhost:4200/assets/data.json';
    constructor( private http: HttpClient ) {}

    //@Cacheable() 
    getHomeData(): Observable<HomeModel>{
      return this.http.get<HomeModel>(this.homeApiUrl)
      .pipe(
          map(res => res),
          catchError(this.handleError)
      );
    }

    //@Cacheable()
    getTraditionData(): Observable<TraditionModel>{
      return this.http.get<TraditionModel>(this.ourTraditionApiUrl)
      .pipe(
          map(res => res),
          catchError(this.handleError)
      );
    }

    private handleError (error: HttpErrorResponse) {
      console.error('ApiService::handleError', error);
      return throwError(error.message || 'Server error');
    }
}
