import { Component, OnInit } from '@angular/core';
import { MenuEnum } from '../core/enum/menuEnum.enum';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {
  public activeMenu: MenuEnum;
  public menuEnum = MenuEnum;

  constructor() { }

  ngOnInit(): void {
    this.activeMenu = this.menuEnum.HOME;
  }

  public menuClick() {
    this.activeMenu = this.menuEnum.CONTA_CORRENTE;
  }

}
