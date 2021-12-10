import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class BaseProductService<T>
{
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(protected http: HttpClient, protected url: string) { }

  getById(id: Number): Observable<T>
  {
    const fullUrl = `${this.url}/${id}`;
    return this.http.get<T>(fullUrl);
  }

  getAll(): Observable<T[]>
  {
    return this.http.get<T[]>(this.url);
  }

  addNew(product: T): Observable<T>
  {
    return this.http.post<T>(this.url, product, this.httpOptions);
  }

  update(id: number, product: T): Observable<T>
  {
    const fullUrl = `${this.url}/${id}`
    return this.http.put<T>(fullUrl, product, this.httpOptions);
  }

  deleteById(id: Number)
  {
    const fullUrl = `${this.url}/delete/${id}`;
    return this.http.delete<T>(fullUrl, this.httpOptions);
  }
}
