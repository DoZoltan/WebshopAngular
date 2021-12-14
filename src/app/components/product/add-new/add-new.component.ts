import { Component, OnInit, ViewChild } from '@angular/core';
import { CpuService } from 'src/app/services/product/cpu.service';
import { MotherboardService } from 'src/app/services/product/motherboard.service';
import { RamService } from 'src/app/services/product/ram.service';
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

  constructor(private cpuService: CpuService, 
    private ramService: RamService, 
    private motherboardService: MotherboardService) { }

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
    if (this.activeMenubarElement.cpu)
    {
      this.cpuService.addNew(this.cpuFormComponent.cpuForm.value).subscribe((data) => {},
        (error) => {this.showAddResult("Add new CPU has failed")}, 
        () => { this.showAddResult("CPU has Successfully added"), this.cpuFormComponent.cpuForm.reset() });
    }
    else if (this.activeMenubarElement.ram)
    {
      this.ramService.addNew(this.ramFormComponent.ramForm.value).subscribe((data) => {},
        (error) => {this.showAddResult("Add new RAM has failed")}, 
        () => { this.showAddResult("RAM has Successfully added"), this.ramFormComponent.ramForm.reset() });
    }
    else if (this.activeMenubarElement.motherboard)
    {
      this.motherboardService.addNew(this.motherboardFormComponent.motherboardForm.value).subscribe((data) => {},
        (error) => {this.showAddResult("Add new Motherboard has failed"), this.motherboardFormComponent.motherboardForm.reset() }, 
        () => { this.showAddResult("Motherboard has Successfully added") });
    }
    else
    {
      console.log('The selected product category is invalid');
    }
  }

  isAddButtonDisabled(): boolean
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

  // It will open a nice popup in the future
  showAddResult(resultMassage: string)
  {
    window.alert(resultMassage);
  }
}
