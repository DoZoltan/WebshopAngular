import { AuthenticationComponent } from './components/administration/authentication/authentication.component';
import { UserComponent } from './components/administration/user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './components/product/grid/grid.component';

const routes: Routes = [
  { path: '', redirectTo: '/products/cpu', pathMatch: 'full' },
  { path: 'products/cpu', component: GridComponent },
  { path: 'products/ram', component: GridComponent },
  { path: 'products/motherboard', component: GridComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: AuthenticationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
