import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { AdminNavBarComponent } from './components/navigation/admin-nav-bar/admin-nav-bar.component';
import { AddNewComponent } from './components/product/add-new/add-new.component';
import { UpdateComponent } from './components/product/update/update.component';
import { MotherboardFormComponent } from './components/product/productForms/motherboard-form/motherboard-form.component';
import { RamFormComponent } from './components/product/productForms/ram-form/ram-form.component';
import { CpuFormComponent } from './components/product/productForms/cpu-form/cpu-form.component';

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
    AdminNavBarComponent,
    AddNewComponent,
    UpdateComponent,
    MotherboardFormComponent,
    RamFormComponent,
    CpuFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AgGridModule.withComponents([]), FormsModule, ReactiveFormsModule],
  providers: [UrlProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
