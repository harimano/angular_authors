import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { LandingComponent } from './landing/landing.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path: 'add',component: AddComponent},
  {path:'edit/:id',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
