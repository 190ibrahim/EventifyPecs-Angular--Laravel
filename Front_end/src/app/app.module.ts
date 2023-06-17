import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { CommentComponent } from './components/comment/comment.component';
import { EventComponent } from './components/event/event.component';
import { ListingComponent } from './components/listing/listing.component';
import { ProductComponent } from './components/product/product.component';
import { ServiceComponent } from './components/service/service.component';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementComponent,
    CommentComponent,
    EventComponent,
    ListingComponent,
    ProductComponent,
    ServiceComponent,
    UserComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
