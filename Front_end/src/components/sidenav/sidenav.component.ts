import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, Output, EventEmitter, OnInit, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInOut, INavbarData } from './helper';
import { navbarData } from './nav-data';
import { UserModel } from 'src/models/UserModel';
import { UserService } from 'src/services/user.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    fadeInOut,
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({transform: 'rotate(0deg)', offset: '0'}),
            style({transform: 'rotate(2turn)', offset: '1'})
          ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {
  @Input() navUser? : UserModel;

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  multiple: boolean = false;

  /**
   * Host listener for the window resize event.
   * Updates the screenWidth property and emits the collapsed state to the parent component.
   * @param event The resize event object.
   */
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768 ) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  constructor(public router: Router, private userService: UserService) {}

  /**
   * Initializes the component by setting the initial screenWidth value.
   */
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  /**
   * Toggles the collapsed state of the sidenav and emits the updated state to the parent component.
   */
  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  /**
   * Closes the sidenav by setting the collapsed state to false and emits the updated state to the parent component.
   */
  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  /**
   * Handles the click event on a navbar item.
   * Toggles the expanded state of the clicked item.
   * @param item The navbar item that was clicked.
   */
  handleClick(item: INavbarData): void {
    this.shrinkItems(item);
    item.expanded = !item.expanded;
  }

  /**
   * Determines the CSS class for the active navbar item based on the current route.
   * @param data The navbar item data.
   * @returns The CSS class name.
   */
  getActiveClass(data: INavbarData): string {
    return this.router.url.includes(data.routeLink) ? 'active' : '';
  }

  /**
   * Shrinks the expanded navbar items if the multiple flag is false.
   * @param item The navbar item to exclude from shrinking.
   */
  shrinkItems(item: INavbarData): void {
    if (!this.multiple) {
      for(let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  }
}
