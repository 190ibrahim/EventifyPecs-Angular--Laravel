import { Component } from '@angular/core';
import { UserModel } from 'src/models/UserModel';
import { UserService } from 'src/services/user.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Front_end';

  isSideNavCollapsed = false;
  screenWidth = 0;
  public user? : UserModel;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.userService.getUserData().subscribe(data => {
          if (data?.state === 'success') {
              this.user = data;
          } else {
              console.log(data);
          }
      });
  }



  
}
