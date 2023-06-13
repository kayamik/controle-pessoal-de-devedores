import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs/internal/Observable';
import { Devedor } from '../model/devedor';
import { RoutesAPI } from '../util/routes-api';
import { ErrorUtil } from '../util/error-util';

@Injectable({
  providedIn: 'root',
})
export class UserPromiseService {
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getByUsername(nomeourazaosocial: string): Observable<User[]> {
    const query: HttpParams = new HttpParams().set('username', nomeourazaosocial);
    const options = nomeourazaosocial ? { params: query } : {};

    return this.httpClient.get<User[]>(`${RoutesAPI.USERS}`, options).pipe(
      //map((users: User[])=>users[0]),
      catchError(ErrorUtil.handleError)
    );
  }

  /**
   * Lista as transações de um dado usuário.
   * @param id
   * @returns
   */
  listTransactionsByUser(id: string): Observable<Devedor[]> {
    return this.httpClient
      .get<Devedor[]>(`${RoutesAPI.DEVEDORES}/${id}/devedores`)
      .pipe(catchError(ErrorUtil.handleError));
  }

  save(user: User): Observable<User> {
    return this.httpClient.post<User>(
      `${RoutesAPI.USERS}`,
      user,
      this.httpOptions
    );
  }

  patch(user: User): Observable<User> {
    return this.httpClient.patch<User>(
      `${RoutesAPI.USERS}/${user.id}`,
      user,
      this.httpOptions
    );
  }

  update(user: User): Observable<User> {
    return this.httpClient.put<User>(
      `${RoutesAPI.USERS}/${user.id}`,
      user,
      this.httpOptions
    );
  }
}
