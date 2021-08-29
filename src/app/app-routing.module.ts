import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchUsernameComponent } from './search-username/search-username.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'search-username', component: SearchUsernameComponent},
  { path: 'home-page', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
