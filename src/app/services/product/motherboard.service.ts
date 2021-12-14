import { IRam } from './../../interfaces/products/iram';
import { UrlProvider } from './../../config/url-provider';
import { HttpClient } from '@angular/common/http';
import { IMotherboard } from './../../interfaces/products/imotherboard';
import { Injectable } from '@angular/core';
import { BaseProductService } from './base-product.service';
import { CpuSocketEnum } from 'src/app/enums/cpu-socket-enum';
import { Observable } from 'rxjs';
import { RamSocketEnum } from 'src/app/enums/ram-socket-enum';
import { IProductGridDataDTO } from 'src/app/interfaces/DTOs/iproduct-grid-data-dto';

@Injectable({
  providedIn: 'root'
})
export class MotherboardService extends BaseProductService<IMotherboard> {

  constructor(http: HttpClient, urlProvider: UrlProvider)
  {
    super(http, urlProvider.MOTHERBOARD);
  }

  getMotherboardsByCPU(cpuSocket: CpuSocketEnum): Observable<IMotherboard>
  {
    return this.http.get<IMotherboard>(`${this.url}/cpuSocket/${cpuSocket}`);
  }

  getMotherboardsByMemory(memorySocket: RamSocketEnum): Observable<IRam>
  {
    return this.http.get<IRam>(`${this.url}/memorySocket/${memorySocket}`);
  }

  getMotherboardsForGridData(): Observable<IProductGridDataDTO[]>
  {
    return this.http.get<IProductGridDataDTO[]>(`${this.url}/grid/`);
  }
}
