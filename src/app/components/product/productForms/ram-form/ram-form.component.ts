import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      productType: ['', [Validators.required]],
      gb: ['', [Validators.required]],
      delay: ['', [Validators.required]],
      speed: ['', [Validators.required]],
      socketType: ['', [Validators.required]],
    }
  );

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void 
  {

  }

  ngOnChanges()
  {
    this.ramForm = this.formBuilder.group(
      {
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
}
