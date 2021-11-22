import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBaseProductDTO } from 'src/app/interfaces/dto/ibase-product-dto';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  columnDefs = [
    { cellClass: 'grid-col', headerName: "Name", field: "ProductName", resizable: true, sortable: true, filter: true},
    { cellClass: 'grid-col', headerName: "Brand", field: "Brand", resizable: true, sortable: true, filter: true},
    { cellClass: 'grid-col', headerName: "Price", field: "SellPrice", resizable: true, sortable: true, filter: true}
  ];

  products: IBaseProductDTO[] = [
    { ProductName: 'asd', Brand: 'asd', SellPrice: 100 },
    { ProductName: 'das', Brand: 'dsa', SellPrice: 110 },
    { ProductName: 'sad', Brand: 'sda', SellPrice: 120 },
  ];

  constructor(private route: Router) { }

  ngOnInit(): void
  {
    const currentRoute = this.route.url

    switch (currentRoute) {
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
      { ProductName: 'CPU 1', Brand: 'asd', SellPrice: 100 },
      { ProductName: 'CPU 2', Brand: 'dsa', SellPrice: 110 },
      { ProductName: 'CPU 3', Brand: 'sda', SellPrice: 120 },
    ]
    
    return Cpus;
  }

  getRams(): IBaseProductDTO[]
  {
    let Cpus: IBaseProductDTO[] = [
      { ProductName: 'RAM 1', Brand: 'asd', SellPrice: 100 },
      { ProductName: 'RAM 2', Brand: 'dsa', SellPrice: 110 },
      { ProductName: 'RAM 3', Brand: 'sda', SellPrice: 120 },
    ]
    
    return Cpus;
  }

  getMotherboards(): IBaseProductDTO[]
  {
    let Cpus: IBaseProductDTO[] = [
      { ProductName: 'Moth 1', Brand: 'asd', SellPrice: 100 },
      { ProductName: 'Moth 2', Brand: 'dsa', SellPrice: 110 },
      { ProductName: 'Moth 3', Brand: 'sda', SellPrice: 120 },
    ]
    
    return Cpus;
  }

}
