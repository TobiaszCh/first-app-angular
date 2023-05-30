import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyClientService {

  constructor(private httpClient: HttpClient) {
  }

  public getCurrency(): Observable<Roott[]> {
    console.log('Request sent');
    return this.httpClient.get<Roott[]>('http://localhost:8020/courses');
  }
}

export interface Roott {
  id: number
  displayName: string
}

