import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

>>>>>>> df8d5f088f2d47b3300f708c0e7ec75add20ab2b
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
=======
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    StatisticsComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    SublevelMenuComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
>>>>>>> df8d5f088f2d47b3300f708c0e7ec75add20ab2b
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
