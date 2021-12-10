import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CpuSocketEnum } from 'src/app/enums/cpu-socket-enum';
import { ProductTypeEnum } from 'src/app/enums/product-type-enum';

@Component({
  selector: 'app-cpu-form',
  templateUrl: './cpu-form.component.html',
  styleUrls: ['./cpu-form.component.scss']
})
export class CpuFormComponent implements OnInit {
  @Input() public cpuToUpdate: any = null;

  cpuForm = this.formBuilder.group(
    {
      productName: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      imgURL: [''],
      acquisitionPrice: ['', [Validators.required]],
      sellPrice: ['', [Validators.required]],
      productType: ['', [Validators.required]],
      coreNumber: ['', [Validators.required]],
      l3Cache: ['', [Validators.required]],
      speed: ['', [Validators.required]],
      socketType: ['', [Validators.required]],
    }
  );

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  ngOnChanges()
  {
    this.cpuForm = this.formBuilder.group(
      {
        productName: [this.cpuToUpdate?.productName, [Validators.required]],
        brand: [this.cpuToUpdate?.brand, [Validators.required]],
        imgURL: [this.cpuToUpdate?.imgURL],
        acquisitionPrice: [this.cpuToUpdate?.acquisitionPrice, [Validators.required]],
        sellPrice: [this.cpuToUpdate?.sellPrice, [Validators.required]],
        productType: [this.cpuToUpdate ? this.getProductType(this.cpuToUpdate.productType) : '', [Validators.required]],
        coreNumber: [this.cpuToUpdate?.coreNumber, [Validators.required]],
        l3Cache: [this.cpuToUpdate?.l3Cache, [Validators.required]],
        speed: [this.cpuToUpdate?.speed, [Validators.required]],
        socketType: [this.cpuToUpdate ? this.getCpuSocketType(this.cpuToUpdate.socketType) : '', [Validators.required]],
      }
    );   
  }

  getCpuSocketType(typeNumber: number): string
  {
    return CpuSocketEnum[typeNumber];
  }

  getProductType(typeNumber: number): string 
  {
    return ProductTypeEnum[typeNumber];
  }
}
