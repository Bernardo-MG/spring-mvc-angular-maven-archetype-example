import { Injectable } from '@angular/core';
import { Data } from './data';
import { ApiResponse } from './api-response';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataForm } from './dataForm';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private endpoint = 'http://localhost:8080/rest/entity';

  private reportEndpoint = 'http://localhost:8080/rest/entity/pdf';

  constructor(
    private http: HttpClient
  ) { }

  search(query: string): Observable<Data[]> {
    const params = { query };
    return this.http.get<ApiResponse<Data[]>>(this.endpoint, { params: params }).pipe(
      map((response: ApiResponse<Data[]>) => { return response.content.content }),
      catchError(this.handleError<Data[]>('search', []))
    ).pipe(
      catchError(this.handleError<Data[]>('search', []))
    );
  }

  save(data: DataForm): void {
    this.http.post<DataForm>(this.endpoint, data).pipe(
      catchError(this.handleError<DataForm>('getData', data))
    ).subscribe();
  }

  report(): void {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    this.http.get(this.reportEndpoint, { headers: headers, responseType: 'blob' }).subscribe(response => this.downLoadFile(response, 'application/pdf'));
  }

  downLoadFile(data: any, type: string) {
    let blob = new Blob([data], { type: type });
    let url = window.URL.createObjectURL(blob);
    let pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
      alert('Please disable your Pop-up blocker and try again.');
    }
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

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
