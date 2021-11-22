import { IMotherboard } from './../../../interfaces/products/imotherboard';
import { IRam } from './../../../interfaces/products/iram';
import { ICpu } from './../../../interfaces/products/icpu';
import { Component, Input, OnInit } from '@angular/core';

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
    console.log('this  ', product);
  }
}
