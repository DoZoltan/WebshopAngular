import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CpuSocketEnum } from 'src/app/enums/cpu-socket-enum';
import { MotherboardSizeStandardEnum } from 'src/app/enums/motherboard-size-standard-enum';
import { ProductTypeEnum } from 'src/app/enums/product-type-enum';
import { RamSocketEnum } from 'src/app/enums/ram-socket-enum';

@Component({
  selector: 'app-motherboard-form',
  templateUrl: './motherboard-form.component.html',
  styleUrls: ['./motherboard-form.component.scss']
})
export class MotherboardFormComponent implements OnInit {
  @Input() public motherboardToUpdate: any = null;

  motherboardForm = this.formBuilder.group(
    {
      productName: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      imgURL: [''],
      acquisitionPrice: ['', [Validators.required]],
      sellPrice: ['', [Validators.required]],
      productType: ['', [Validators.required]],
      usb3Amount: ['', [Validators.required]],
      wifi: ['', [Validators.required]],
      sizeStandard: ['', [Validators.required]],
      cpuSocketType: ['', [Validators.required]],
      memorySocketType: ['', [Validators.required]],
      maxMemorySize: ['', [Validators.required]],
      numberOfMemorySockets: ['', [Validators.required]],
    }
  );

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  ngOnChanges()
  {
    this.motherboardForm = this.formBuilder.group(
      {
        productName: [this.motherboardToUpdate?.productName, [Validators.required]],
        brand: [this.motherboardToUpdate?.brand, [Validators.required]],
        imgURL: [this.motherboardToUpdate?.imgURL],
        acquisitionPrice: [this.motherboardToUpdate?.acquisitionPrice, [Validators.required]],
        sellPrice: [this.motherboardToUpdate?.sellPrice, [Validators.required]],
        productType: [this.motherboardToUpdate ? this.getProductType(this.motherboardToUpdate.productType) : '', [Validators.required]],
        usb3Amount: [this.motherboardToUpdate?.usb3Amount, [Validators.required]],
        wifi: [this.motherboardToUpdate?.wifi, [Validators.required]],
        sizeStandard: [this.motherboardToUpdate ? this.getMotherboardSizeStandardType(this.motherboardToUpdate.sizeStandard) : '', [Validators.required]],
        cpuSocketType: [this.motherboardToUpdate ? this.getCpuSocketType(this.motherboardToUpdate.cpuSocketType) : '', [Validators.required]],
        memorySocketType: [this.motherboardToUpdate ? this.getRamSocketType(this.motherboardToUpdate.memorySocketType) : '', [Validators.required]],
        maxMemorySize: [this.motherboardToUpdate?.maxMemorySize, [Validators.required]],
        numberOfMemorySockets: [this.motherboardToUpdate?.numberOfMemorySockets, [Validators.required]],
      }
    );
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

  getProductType(typeNumber: number): string 
  {
    return ProductTypeEnum[typeNumber];
  }
}
