import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlProvider } from 'src/app/config/url-provider';
import { IProductGridDataDTO } from 'src/app/interfaces/DTOs/iproduct-grid-data-dto';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient, private urlProvider: UrlProvider) { }

  searchByBrand(brandPart: string): Observable<IProductGridDataDTO[]>
  {
    return this.http.get<IProductGridDataDTO[]>(`${this.urlProvider.SEARCH}/brand/${brandPart}`);
  }

  searchByProductName(namePart: string): Observable<IProductGridDataDTO[]>
  {
    return this.http.get<IProductGridDataDTO[]>(`${this.urlProvider.SEARCH}/name/${namePart}`);
  }
}
