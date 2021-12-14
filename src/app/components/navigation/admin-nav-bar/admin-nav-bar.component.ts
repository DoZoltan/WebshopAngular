import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.scss']
})
export class AdminNavBarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  isActive(routeName: string): boolean
  {
    return routeName == this.route.url;
  }

  search(event: any)
  {
    if (this.isInputFieldNotEmpty(event.target.value))
    {
      //this.keyUpEvent.emit(event.target.value);
    }
  }

  setProductByType(type: string)
  {
    this.deleteInputContent();
    //this.setProduct.emit(type);
  }

  deleteInputContent()
  {
    (document.querySelector('.search-input') as HTMLInputElement).value = '';
  }

  private isInputFieldNotEmpty(inputContent: string): boolean
  {
    return (inputContent.length > 0 && !inputContent.startsWith(" "));
  }
}
