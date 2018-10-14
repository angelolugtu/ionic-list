import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinksComponent } from './links/links.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'home', component: LinksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
