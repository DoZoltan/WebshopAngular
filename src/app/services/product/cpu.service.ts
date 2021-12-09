import { CpuSocketEnum } from './../../enums/cpu-socket-enum';
import { UrlProvider } from './../../config/url-provider';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICpu } from 'src/app/interfaces/products/icpu';
import { BaseProductService } from './base-product.service';
import { IProductGridDataDTO } from 'src/app/interfaces/DTOs/iproduct-grid-data-dto';

@Injectable({
  providedIn: 'root'
})
export class CpuService extends BaseProductService<ICpu> {

  constructor(http: HttpClient, urlProvider: UrlProvider)
  {
    super(http, urlProvider.CPU);
  }

  getCpusBySocket(socket: CpuSocketEnum): Observable<ICpu>
  {
    return this.http.get<ICpu>(`${this.url}/socket/${socket}`);
  }

  getCpusForGridData(): Observable<IProductGridDataDTO[]>
  {
    return this.http.get<IProductGridDataDTO[]>(`${this.url}/grid/`);
  }
}
