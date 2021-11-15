import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  columnDefs = [
    { headerName: "Name", field: "ProductName" },
    { headerName: "Brand", field: "Brand" },
    { headerName: "Price", field: "SellPrice" }
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
