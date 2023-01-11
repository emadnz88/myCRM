import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:"login"},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent , canActivate:[AuthGuard]},
  {path:'**',component:PnfComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
