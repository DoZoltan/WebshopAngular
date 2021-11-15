import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  columnDefs = [
    { cellClass: 'grid-col', headerName: "Name", field: "ProductName", resizable: true},
    { cellClass: 'grid-col', headerName: "Brand", field: "Brand", resizable: true},
    { cellClass: 'grid-col', headerName: "Price", field: "SellPrice", resizable: true}
  ];

  products = [
    { ProductName: '1', Brand: 'asd', SellPrice: 100 },
    { ProductName: '2', Brand: 'dsa', SellPrice: 110 },
    { ProductName: '3', Brand: 'sda', SellPrice: 120 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
