import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { LandingComponent } from './landing/landing.component';
import { EditComponent } from './edit/edit.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesAddComponent } from './quotes-add/quotes-add.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path: 'add',component: AddComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'quotes/:id',component:QuotesComponent},
  {path:'quotes/:id/quotes',component:QuotesAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
