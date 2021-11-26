import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
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
}
