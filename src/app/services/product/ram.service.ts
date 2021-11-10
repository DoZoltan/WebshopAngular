import { IRam } from './../../interfaces/products/iram';
import { UrlProvider } from './../../config/url-provider';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseProductService } from './base-product.service';
import { RamSocketEnum } from 'src/app/enums/ram-socket-enum';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RamService extends BaseProductService<IRam> {

  constructor(http: HttpClient, urlProvider: UrlProvider)
  {
    super(http, urlProvider.RAM);
  }

  GetMemoriesBySocket(socket: RamSocketEnum): Observable<IRam>
  {
    return this.http.get<IRam>(`${this.url}/socket/${socket}`);
  }
}
