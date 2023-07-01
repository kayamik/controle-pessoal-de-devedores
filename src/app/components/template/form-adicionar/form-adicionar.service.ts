import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoutesAPI } from 'src/app/util/routes-api';
import { ErrorUtil } from 'src/app/util/error-util';
import { Divida } from 'src/app/model/divida';

@Injectable({
  providedIn: 'root',
})
export class AdicionarService {
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getByIdDivida(id: string): Observable<Divida[]> {
    const query: HttpParams = new HttpParams().set('id', id);
    const options = id ? { params: query } : {};

    return this.httpClient.get<Divida[]>(`${RoutesAPI.DIVIDAS}`, options).pipe(
      catchError(ErrorUtil.handleError)
    );
  }

  obterDivida(id: string): Observable<Divida> {
    const query: HttpParams = new HttpParams().set('id', id);
    const options = id ? { params: query } : {};

    return this.httpClient.get<Divida[]>(`${RoutesAPI.DIVIDAS}`, options).pipe(
      map((dividas: Divida[])=>dividas[0]),
      catchError(ErrorUtil.handleError)
    );
  }

  listDividasByDevedor(devedorId: string): Observable<Divida[]> {
    const query: HttpParams = new HttpParams().set('devedorId', devedorId);
    const options = devedorId ? { params: query } : {};

    return this.httpClient.get<Divida[]>(`${RoutesAPI.DIVIDAS}`, options).pipe(
      catchError(ErrorUtil.handleError)
    );
  }

  totalDividas(): Observable<Divida[]> {
    return this.httpClient.get<Divida[]>(`${RoutesAPI.DIVIDAS}`).pipe(
      catchError(ErrorUtil.handleError)
    );
  }

  save(divida: Divida): Observable<Divida> {
    return this.httpClient.post<Divida>(
      `${RoutesAPI.DIVIDAS}`,
      divida,
      this.httpOptions
    );
  }

  patch(divida: Divida): Observable<Divida> {
    return this.httpClient.patch<Divida>(
      `${RoutesAPI.DIVIDAS}/${divida.id}`,
      divida,
      this.httpOptions
    );
  }

  update(divida: Divida): Observable<Divida> {
    return this.httpClient.put<Divida>(
      `${RoutesAPI.DIVIDAS}/${divida.id}`,
      divida,
      this.httpOptions
    );
  }

  delete(id: string): Observable<any> {
    return this.httpClient.delete(`${RoutesAPI.DIVIDAS}/${id}`, {
      responseType: 'text',
    });
  }
}
