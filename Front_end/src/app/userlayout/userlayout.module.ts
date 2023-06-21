import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserlayoutRoutingModule } from './userlayout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { UevetsComponent } from './uevets/uevets.component';
import { RegComponent } from './reg/reg.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EventsModule } from '../events/events.module';

@NgModule({
  declarations: [LayoutComponent, UevetsComponent, RegComponent],
  imports: [
    CommonModule,
    UserlayoutRoutingModule,
    MatSnackBarModule,
    EventsModule,
  ],
})
export class UserlayoutModule {}
