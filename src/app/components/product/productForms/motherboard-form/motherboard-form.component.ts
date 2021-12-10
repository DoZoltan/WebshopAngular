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

  changeCpuSocketType(event: any) 
  {
    this.motherboardForm.controls['cpuSocketType'].setValue(event.target.value, {
      onlySelf: true
    })
  }

  changeProductType(event: any) 
  {
    this.motherboardForm.controls['productType'].setValue(event.target.value, {
      onlySelf: true
    })
  }

  changeRamSocketType(event: any) 
  {
    this.motherboardForm.controls['memorySocketType'].setValue(event.target.value, {
      onlySelf: true
    })
  }

  changeSizeStandard(event: any) 
  {
    this.motherboardForm.controls['sizeStandard'].setValue(event.target.value, {
      onlySelf: true
    })
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

  getCpuSocketTypeArray(): string[]
  {
    let typeArray: string[] = [];

    Object.keys(CpuSocketEnum).forEach(element => {
      if (isNaN(Number(element))) 
      {
        typeArray.push(element);
      }
    });

    return typeArray!;
  }

  getProductTypeArray(): string[]
  {
    let typeArray: string[] = [];

    Object.keys(ProductTypeEnum).forEach(element => {
      if (isNaN(Number(element))) 
      {
        typeArray.push(element);
      }
    });

    return typeArray!;
  }

  getRamSocketTypeArray(): string[]
  {
    let typeArray: string[] = [];

    Object.keys(RamSocketEnum).forEach(element => {
      if (isNaN(Number(element))) 
      {
        typeArray.push(element);
      }
    });

    return typeArray!;
  }

  getMotherboardSizeStandardArray(): string[]
  {
    let sizeArray: string[] = [];

    Object.keys(MotherboardSizeStandardEnum).forEach(element => {
      if (isNaN(Number(element))) 
      {
        sizeArray.push(element);
      }
    });

    return sizeArray!;
  }
}
