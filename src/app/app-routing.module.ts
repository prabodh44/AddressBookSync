import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailsComponent} from './details/details.component';
import {HomeComponent} from './home/home.component';
import {UpdateDetailsComponent} from './updatecontact/details-form.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'update/:id', component: UpdateDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES, {initialNavigation: false}) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}
