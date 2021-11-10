import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseProductServiceService<T>
{
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient, private url: string) { }

  getById(id: Number): Observable<T>
  {
    const fullUrl = `${this.url}/${id}`;
    return this.http.get<T>(fullUrl);
  }

  getAll(): Observable<T>
  {
    return this.http.get<T>(this.url);
  }

  addNew(product: T): Observable<T>
  {
    return this.http.post<T>(this.url, product, this.httpOptions);
  }

  update(product: T): Observable<T>
  {
    return this.http.put<T>(this.url, product, this.httpOptions);
  }

  deleteById(id: Number)
  {
    const fullUrl = `${this.url}/delete/${id}`;
    return this.http.delete<T>(fullUrl, this.httpOptions);
  }
}
