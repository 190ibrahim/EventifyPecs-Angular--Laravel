import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoupensComponent } from './coupens/coupens.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { StatisticsComponent } from '../pages/statistics/statistics.component';
import { PagesComponent } from '../pages/pages/pages.component';
import { MediaComponent } from '../pages/media/media.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from '../pages/settings/settings.component';

const routes: Routes = [
  {path: '', redirectTo: 'events/eventList', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then(m => m.EventsModule)
  },
  {path: 'statistics', component: StatisticsComponent},
  {
    path: 'coupens',
    loadChildren: () => import('./coupens/coupens.module').then(m => m.CoupensModule)
  },
  {path: 'pages', component: PagesComponent},
  {path: 'media', component: MediaComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
