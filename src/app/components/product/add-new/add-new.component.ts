import { Component, OnInit, ViewChild } from '@angular/core';
import { CpuFormComponent } from '../productForms/cpu-form/cpu-form.component';
import { MotherboardFormComponent } from '../productForms/motherboard-form/motherboard-form.component';
import { RamFormComponent } from '../productForms/ram-form/ram-form.component';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  @ViewChild(RamFormComponent) ramFormComponent: RamFormComponent;
  @ViewChild(MotherboardFormComponent) motherboardFormComponent: MotherboardFormComponent;
  @ViewChild(CpuFormComponent) cpuFormComponent: CpuFormComponent;
  
  activeMenubarElement = {
    cpu: true,
    ram: false,
    motherboard: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  isActive(menubarElementName: string): boolean
  {
    switch (menubarElementName) {
      case 'cpu':
        return this.activeMenubarElement.cpu;
      case 'ram':
        return this.activeMenubarElement.ram;
      case 'motherboard':
        return this.activeMenubarElement.motherboard;
      default:
        return false;
    }
  }

  setActiveMenubarElement(menubarElementName: string)
  {
    switch (menubarElementName) {
      case 'cpu':
        this.activeMenubarElement.cpu = true;
        this.activeMenubarElement.ram = false;
        this.activeMenubarElement.motherboard = false;
        break;
      case 'ram':
        this.activeMenubarElement.cpu = false;
        this.activeMenubarElement.ram = true;
        this.activeMenubarElement.motherboard = false;
        break;
      case 'motherboard':
        this.activeMenubarElement.cpu = false;
        this.activeMenubarElement.ram = false;
        this.activeMenubarElement.motherboard = true;
        break;
      default:
        this.activeMenubarElement.cpu = false;
        this.activeMenubarElement.ram = false;
        this.activeMenubarElement.motherboard = false;
    }
  }

  create()
  {
    console.log('ram', this.ramFormComponent?.ramForm.valid);
    console.log('cpu', this.cpuFormComponent?.cpuForm.valid);
    console.log('moth', this.motherboardFormComponent?.motherboardForm.valid);
  }

  isUpdateButtonDisabled(): boolean
  {
    if (this.ramFormComponent) 
    {
      return this.ramFormComponent.ramForm.invalid;
    }
    else if (this.cpuFormComponent)
    {
      return this.cpuFormComponent.cpuForm.invalid;
    }
    else if (this.motherboardFormComponent)
    {
      return this.motherboardFormComponent.motherboardForm.invalid;
    }
    else
    {
      return true;
    }
  }
}
