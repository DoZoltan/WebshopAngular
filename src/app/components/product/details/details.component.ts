import { IMotherboard } from './../../../interfaces/products/imotherboard';
import { IRam } from './../../../interfaces/products/iram';
import { ICpu } from './../../../interfaces/products/icpu';
import { Component, Input, OnInit } from '@angular/core';
import { CpuSocketEnum } from 'src/app/enums/cpu-socket-enum';
import { RamSocketEnum } from 'src/app/enums/ram-socket-enum';
import { MotherboardSizeStandardEnum } from 'src/app/enums/motherboard-size-standard-enum';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  product: any;
  isProductACpu: boolean = false;
  isProductARam: boolean = false;
  isProductAMotherboard: boolean = false;

  constructor() { }

  ngOnInit(): void{
  }

  setDetails(product: ICpu | IRam | IMotherboard)
  {
    if ('coreNumber' in product) 
    {
      this.isProductACpu = true;
    }
    else if ('numberOfMemorySockets' in product)
    {
      this.isProductAMotherboard = true;
    }
    else if ('delay' in product)
    {
      this.isProductARam = true;
    }
    
    this.product = product;
  }

  getRamSocketType(typeNumber: number): string
  {
    return RamSocketEnum[typeNumber];
  }

  getCpuSocketType(typeNumber: number): string
  {
    return CpuSocketEnum[typeNumber];
  }

  getMotherboardSizeStandardType(typeNumber: number): string
  {
    return MotherboardSizeStandardEnum[typeNumber];
  }
}
