import { Component, OnInit } from '@angular/core';
import { ProductTypeEnum } from 'src/app/enums/product-type-enum';
import { IProductGridDataDTO } from 'src/app/interfaces/DTOs/iproduct-grid-data-dto';
import { IBaseProduct } from 'src/app/interfaces/products/ibase-product';
import { CpuService } from 'src/app/services/product/cpu.service';
import { MotherboardService } from 'src/app/services/product/motherboard.service';
import { RamService } from 'src/app/services/product/ram.service';
import { SearchService } from 'src/app/services/utility/search.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  products: IProductGridDataDTO[];
  selectedProduct: any;
  
  columnDefs = [
    { cellClass: 'grid-col', headerName: "Name", field: "productName", resizable: true, sortable: true, filter: true},
  ];

  constructor(private searchService: SearchService,
    private cpuService: CpuService, 
    private ramService: RamService, 
    private motherboardService: MotherboardService) { }

  ngOnInit(): void {
  }

  getSearchResult(event: any)
  {
    if (this.isInputFieldNotEmpty(event.target.value))
    {
      this.searchService.searchByProductName(event.target.value).subscribe(result => this.products = result);
    }
  }

  private isInputFieldNotEmpty(inputContent: string): boolean
  {
    return (inputContent.length > 0 && !inputContent.startsWith(" "));
  }

  getProductDetailsById(event: any) 
  {
    switch (event.data.productType) {
      case ProductTypeEnum.Cpu:
        this.cpuService.getById(event.data.id).subscribe(product => this.selectedProduct = product);
        break;
      case ProductTypeEnum.Ram:
        this.ramService.getById(event.data.id).subscribe(product => this.selectedProduct = product);
        break;
      case ProductTypeEnum.Motherboard:
        this.motherboardService.getById(event.data.id).subscribe(product => this.selectedProduct = product);
        break;
    }
  }
}
