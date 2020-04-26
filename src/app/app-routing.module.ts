import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { HjohnsoniiComponent } from './hjohnsonii/hjohnsonii.component';


const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'hjohnsonii', component: HjohnsoniiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
