import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UevetsComponent } from './uevets/uevets.component';
import { RegComponent } from './reg/reg.component';

const routes: Routes = [
  { path: '', redirectTo: 'usereventList', pathMatch: 'full' },
  // {path: '', redirectTo: 'events/eventList', pathMatch: 'full'},
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'usereventList', component: UevetsComponent },
  { path: 'regevents', component: RegComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserlayoutRoutingModule {}
