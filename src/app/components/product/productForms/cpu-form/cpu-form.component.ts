import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
        productType: [this.cpuToUpdate?.productType, [Validators.required]],
        coreNumber: [this.cpuToUpdate?.coreNumber, [Validators.required]],
        l3Cache: [this.cpuToUpdate?.l3Cache, [Validators.required]],
        speed: [this.cpuToUpdate?.speed, [Validators.required]],
        socketType: [this.cpuToUpdate?.socketType, [Validators.required]],
      }
    );   
  }

}
