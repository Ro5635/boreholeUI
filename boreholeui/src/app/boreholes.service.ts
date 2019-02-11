import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Borehole} from "../Borehole";
import {tap, catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BoreholesService {

  // TODO: REPLACE FIXED URL
  boreholeAPIURL = 'http://localhost:3300/boreholes';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
      // 'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) {
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // CURRENTLY FIXED TO GET BOREHOLE WITH ID: GreenEggsAndHam
  getBoreholes(): Observable<Borehole[]> {

    return this.http.get<Borehole[]>(this.boreholeAPIURL + '/GreenEggsAndHam')
      .pipe(
        tap(() => {
          console.log(`fetched boreholes`);
        }),
        catchError(this.handleError('getBoreholes', []))
      );

  }

  saveBorehole(borehole: Borehole): Observable<object> {
    const data = JSON.stringify({Boreholes: [borehole]});
    return this.http.put(this.boreholeAPIURL, data, this.httpOptions)
      .pipe(
        tap(() => {
          console.log(`Put Borehole`);
        }),
        catchError(this.handleError('saveBoreholes', {}))
      );
  }

}
