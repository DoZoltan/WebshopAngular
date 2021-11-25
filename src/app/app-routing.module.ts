import { RegistrationComponent } from './components/administration/registration/registration.component';
import { AuthenticationComponent } from './components/administration/authentication/authentication.component';
import { UserComponent } from './components/administration/user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './components/product/grid/grid.component';
import { AdminComponent } from './components/administration/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/products/cpu', pathMatch: 'full' },
  { path: 'products/:productType', component: GridComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: AuthenticationComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
