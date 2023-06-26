import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoupensComponent } from './coupens/coupens.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { StatisticsComponent } from '../pages/statistics/statistics.component';
import { PagesComponent } from '../pages/pages/pages.component';
import { MediaComponent } from '../pages/media/media.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from '../pages/settings/settings.component';

// Define the routes for the application
const routes: Routes = [
  { path: '', redirectTo: 'events/eventList', pathMatch: 'full' }, // Redirects the root path to 'events/eventList'
  { path: 'dashboard', component: DashboardComponent }, // Route for the 'DashboardComponent'
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
    // Lazy-loaded route for the 'ProductsComponent'. Loads the 'ProductsModule' on demand.
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then(m => m.EventsModule)
    // Lazy-loaded route for the 'EventsComponent'. Loads the 'EventsModule' on demand.
  },
  { path: 'statistics', component: StatisticsComponent }, // Route for the 'StatisticsComponent'
  {
    path: 'coupens',
    loadChildren: () => import('./coupens/coupens.module').then(m => m.CoupensModule)
    // Lazy-loaded route for the 'CoupensComponent'. Loads the 'CoupensModule' on demand.
  },
  { path: 'pages', component: PagesComponent }, // Route for the 'PagesComponent'
  { path: 'media', component: MediaComponent }, // Route for the 'MediaComponent'
  { path: 'settings', component: SettingsComponent } // Route for the 'SettingsComponent'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configure the router module with the defined routes
  exports: [RouterModule] // Export the configured router module
})
export class AppRoutingModule { }
