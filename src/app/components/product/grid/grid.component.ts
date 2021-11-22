import { RamService } from './../../../services/product/ram.service';
import { CpuService } from './../../../services/product/cpu.service';
import { IBaseProduct } from './../../../interfaces/products/ibase-product';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { IBaseProductDTO } from 'src/app/interfaces/dto/ibase-product-dto';
import { DetailsComponent } from '../details/details.component';
import { MotherboardService } from 'src/app/services/product/motherboard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
  @ViewChild(DetailsComponent) details: DetailsComponent;

  currentRoute: string;

  columnDefs = [
    { cellClass: 'grid-col', headerName: "Name", field: "productName", resizable: true, sortable: true, filter: true},
    { cellClass: 'grid-col', headerName: "Brand", field: "brand", resizable: true, sortable: true, filter: true},
    { cellClass: 'grid-col', headerName: "Price", field: "sellPrice", resizable: true, sortable: true, filter: true}
  ];

  products: IBaseProductDTO[];

  constructor(private route: Router, 
    private cpuService: CpuService, 
    private ramService: RamService, 
    private motherboardService: MotherboardService) { }

  ngOnInit(): void
  {
    this.currentRoute = this.route.url

    switch (this.currentRoute) {
      case '/products/cpu':
        this.products = this.getCpus();
        break;
      case '/products/ram':
        this.products = this.getRams();
        break;
      case '/products/motherboard':
        this.products = this.getMotherboards();
        break;
    }
  }

  getCpus(): IBaseProductDTO[]
  {
    let Cpus: IBaseProductDTO[] = [
      { id: 1, productName: 'CPU 1', brand: 'asd', sellPrice: 100 },
      { id: 2, productName: 'CPU 2', brand: 'dsa', sellPrice: 110 },
      { id: 3, productName: 'CPU 3', brand: 'sda', sellPrice: 120 },
    ]
    
    return Cpus;
  }

  getRams(): IBaseProductDTO[]
  {
    let Cpus: IBaseProductDTO[] = [
      { id: 1, productName: 'RAM 1', brand: 'asd', sellPrice: 100 },
      { id: 2, productName: 'RAM 2', brand: 'dsa', sellPrice: 110 },
      { id: 3, productName: 'RAM 3', brand: 'sda', sellPrice: 120 },
    ]
    
    return Cpus;
  }

  getMotherboards(): IBaseProductDTO[]
  {
    let Cpus: IBaseProductDTO[] = [
      { id: 1, productName: 'Moth 1', brand: 'asd', sellPrice: 100 },
      { id: 2, productName: 'Moth 2', brand: 'dsa', sellPrice: 110 },
      { id: 3, productName: 'Moth 3', brand: 'sda', sellPrice: 120 },
    ]
    
    return Cpus;
  }

  getProductDetailsById(event: any) 
  {
    switch (this.currentRoute) {
      case '/products/cpu':
        this.cpuService.getById(event.data.id).subscribe(product => this.details.setDetails(product));
        break;
      case '/products/ram':
        this.ramService.getById(event.data.id).subscribe(product => this.details.setDetails(product));
        break;
      case '/products/motherboard':
        this.motherboardService.getById(event.data.id).subscribe(product => this.details.setDetails(product));
        break;
    }
  }

}
