import { RamService } from './../../../services/product/ram.service';
import { CpuService } from './../../../services/product/cpu.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { DetailsComponent } from '../details/details.component';
import { MotherboardService } from 'src/app/services/product/motherboard.service';
import { IBaseProduct } from 'src/app/interfaces/products/ibase-product';

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

  products: IBaseProduct[];

  constructor(private route: Router, 
    private cpuService: CpuService, 
    private ramService: RamService, 
    private motherboardService: MotherboardService) { }

  ngOnInit(): void
  {
    this.currentRoute = this.route.url

    switch (this.currentRoute) {
      case '/products/cpu':
        this.getCpus();
        break;
      case '/products/ram':
        this.getRams();
        break;
      case '/products/motherboard':
        this.getMotherboards();
        break;
    }
  }

  getCpus()
  {
    this.cpuService.getAll().subscribe(cpu => this.products = cpu);
  }

  getRams()
  {
    this.ramService.getAll().subscribe(ram => this.products = ram);
  }

  getMotherboards()
  { 
    this.motherboardService.getAll().subscribe(motherboard => this.products = motherboard);
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
