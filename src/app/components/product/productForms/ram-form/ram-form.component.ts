import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductTypeEnum } from 'src/app/enums/product-type-enum';
import { RamSocketEnum } from 'src/app/enums/ram-socket-enum';

@Component({
  selector: 'app-ram-form',
  templateUrl: './ram-form.component.html',
  styleUrls: ['./ram-form.component.scss']
})
export class RamFormComponent implements OnInit {
  @Input() public ramToUpdate: any = null;

  ramForm = this.formBuilder.group(
    {
      productName: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      imgURL: [''],
      acquisitionPrice: ['', [Validators.required]],
      sellPrice: ['', [Validators.required]],
      productType: [ProductTypeEnum.Ram, [Validators.required]],
      gb: ['', [Validators.required]],
      delay: ['', [Validators.required]],
      speed: ['', [Validators.required]],
      socketType: ['', [Validators.required]],
    }
  );

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  ngOnChanges()
  {
    this.ramForm = this.formBuilder.group(
      {
        id: [this.ramToUpdate?.id, [Validators.required]],
        productName: [this.ramToUpdate?.productName, [Validators.required]],
        brand: [this.ramToUpdate?.brand, [Validators.required]],
        imgURL: [this.ramToUpdate?.imgURL],
        acquisitionPrice: [this.ramToUpdate?.acquisitionPrice, [Validators.required]],
        sellPrice: [this.ramToUpdate?.sellPrice, [Validators.required]],
        productType: [this.ramToUpdate?.productType, [Validators.required]],
        gb: [this.ramToUpdate?.gb, [Validators.required]],
        delay: [this.ramToUpdate?.delay, [Validators.required]],
        speed: [this.ramToUpdate?.speed, [Validators.required]],
        socketType: [this.ramToUpdate?.socketType, [Validators.required]],
      }
    );
  }

  changeSocketType(event: any) 
  {
    this.ramForm.controls['socketType'].setValue(event.target.value, {
      onlySelf: true
    })
  }

  changeProductType(event: any) 
  {
    this.ramForm.controls['productType'].setValue(event.target.value, {
      onlySelf: true
    })
  }

  getRamSocketType(typeNumber: number): string
  {
    return RamSocketEnum[typeNumber];
  }

  getProductType(typeNumber: number): string 
  {
    return ProductTypeEnum[typeNumber];
  }

  getRamSocketTypeArray(): number[]
  {
    let typeArray: number[] = [];

    Object.keys(RamSocketEnum).forEach(element => {
      if (!isNaN(Number(element))) 
      {
        typeArray.push(Number(element));
      }
    });

    return typeArray!;
  }

  getProductTypeArray(): number[]
  {
    let typeArray: number[] = [];

    Object.keys(ProductTypeEnum).forEach(element => {
      if (!isNaN(Number(element))) 
      {
        typeArray.push(Number(element));
      }
    });

    return typeArray!;
  }
}
