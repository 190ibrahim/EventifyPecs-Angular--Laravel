import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from '../components/body/body.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { StatisticsComponent } from '../pages/statistics/statistics.component';
import { PagesComponent } from '../pages/pages/pages.component';
import { MediaComponent } from '../pages/media/media.component';
import { SettingsComponent } from '../pages/settings/settings.component';
import { SublevelMenuComponent } from '../components/sidenav/sublevel-menu.component';
import { HeaderComponent } from '../components/header/header.component';
import { UserService } from 'src/services/user.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
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
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
