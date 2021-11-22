import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.scss']
})
export class LeftNavBarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  isActive(routeName: string): boolean
  {
    return routeName == this.route.url;
  }
}
