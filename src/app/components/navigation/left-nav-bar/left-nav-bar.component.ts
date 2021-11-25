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
    this.keyUpEvent.emit(event.target.value);
  }

  setProductByType(type: string)
  {
    this.setProduct.emit(type);
  }
}
