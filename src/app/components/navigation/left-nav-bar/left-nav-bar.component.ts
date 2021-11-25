import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.scss']
})
export class LeftNavBarComponent implements OnInit {
  @Output() keyUpEvent = new EventEmitter<string>();
  @Output() setProduct = new EventEmitter<string>();

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
      this.keyUpEvent.emit(event.target.value);
    }
  }

  setProductByType(type: string)
  {
    this.deleteInputContent();
    this.setProduct.emit(type);
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