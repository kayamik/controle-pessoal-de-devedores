import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { Injectable } from '@angular/core';
import { Divida } from 'src/app/model/divida';

@Injectable({
  providedIn: 'root',
})
export class FormAdicionarPromiseService {
  URL = 'http://localhost:3000/dividas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getById(id: string): Promise<Divida> {
    const divida$ = this.httpClient.get<Divida>(`${this.URL}/${id}`);
    return lastValueFrom(divida$);
  }

  save(divida: Divida): Promise<Divida> {
    const divida$ = this.httpClient.post<Divida>(
      this.URL,
      JSON.stringify(divida),
      this.httpOptions
    );
    return lastValueFrom(divida$);
  }

  patch(divida: Divida): Promise<Divida> {
    const divida$ = this.httpClient.patch<Divida>(
      this.URL,
      JSON.stringify(divida),
      this.httpOptions
    );
    return lastValueFrom(divida$);
  }

  update(divida: Divida): Promise<Divida> {
    const divida$ = this.httpClient.put<Divida>(
      this.URL,
      JSON.stringify(divida),
      this.httpOptions
    );
    return lastValueFrom(divida$);
  }
}
