import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './components/administration/admin/admin.component';
import { UserComponent } from './components/administration/user/user.component';
import { AuthenticationComponent } from './components/administration/authentication/authentication.component';
import { RegistrationComponent } from './components/administration/registration/registration.component';
import { HeaderNavBarComponent } from './components/navigation/header-nav-bar/header-nav-bar.component';
import { LeftNavBarComponent } from './components/navigation/left-nav-bar/left-nav-bar.component';
import { GridComponent } from './components/product/grid/grid.component';
import { DetailsPopupComponent } from './components/product/details-popup/details-popup.component';
import { ComponentContainerComponent } from './components/component-container/component-container.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    AuthenticationComponent,
    RegistrationComponent,
    HeaderNavBarComponent,
    LeftNavBarComponent,
    GridComponent,
    DetailsPopupComponent,
    ComponentContainerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
