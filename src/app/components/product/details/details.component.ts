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

  // a product tartalmazza a type-ot, így az alapján eldönthető
  setDetails(product: ICpu | IRam | IMotherboard)
  {
    if ('coreNumber' in product)
    {
      this.isProductACpu = true;
      this.isProductAMotherboard = false;
      this.isProductARam = false;
    }
    else if ('numberOfMemorySockets' in product)
    {
      this.isProductACpu = false;
      this.isProductAMotherboard = true;
      this.isProductARam = false;
    }
    else if ('delay' in product)
    {
      this.isProductACpu = false;
      this.isProductAMotherboard = false;
      this.isProductARam = true
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
