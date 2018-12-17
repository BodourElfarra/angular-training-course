import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component'
import {NavComponent} from './nav/nav.component'
import {ContactUSComponent} from './contact-us/contact-us.component'

const routes: Routes = 
[
  {path:'main'  , component : NavComponent},
{path:'about'  , component :AboutComponent },
{path:'contact' , component:ContactUSComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
