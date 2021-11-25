import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { AdminComponent } from './components/administration/admin/admin.component';
import { UserComponent } from './components/administration/user/user.component';
import { AuthenticationComponent } from './components/administration/authentication/authentication.component';
import { RegistrationComponent } from './components/administration/registration/registration.component';
import { HeaderNavBarComponent } from './components/navigation/header-nav-bar/header-nav-bar.component';
import { LeftNavBarComponent } from './components/navigation/left-nav-bar/left-nav-bar.component';
import { GridComponent } from './components/product/grid/grid.component';
import { ComponentContainerComponent } from './components/component-container/component-container.component';
import { DetailsComponent } from './components/product/details/details.component';
import { UrlProvider } from './config/url-provider';
import { AdminNavBarsComponent } from './components/navigation/admin-nav-bars/admin-nav-bars.component';

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
    ComponentContainerComponent,
    DetailsComponent,
    AdminNavBarsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AgGridModule.withComponents([])],
  providers: [UrlProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
