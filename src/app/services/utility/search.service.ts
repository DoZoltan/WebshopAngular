import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlProvider } from 'src/app/config/url-provider';
import { IBaseProduct } from 'src/app/interfaces/products/ibase-product';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient, private urlProvider: UrlProvider) { }

  SearchByBrand(brandPart: string): Observable<IBaseProduct[]>
  {
    return this.http.get<IBaseProduct[]>(`${this.urlProvider.SEARCH}/brand/${brandPart}`);
  }

  SearchByProductName(namePart: string): Observable<IBaseProduct[]>
  {
    return this.http.get<IBaseProduct[]>(`${this.urlProvider.SEARCH}/name/${namePart}`);
  }
}
