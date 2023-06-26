import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  @Input() collapsed = false;
  @Input() screenWidth = 0;
 /**
   * Returns the CSS class to be applied to the body element based on the collapsed and screenWidth inputs.
   * If collapsed is true and screenWidth is greater than 768, 'body-trimmed' class is returned.
   * If collapsed is true and screenWidth is less than or equal to 768 (but greater than 0), 'body-md-screen' class is returned.
   * Otherwise, an empty string is returned, resulting in no additional class being applied.
   * @returns string - The CSS class to be applied to the body element.
   */
  getBodyClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }
}
