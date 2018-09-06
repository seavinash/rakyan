import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OurTraditionComponent } from './our-tradition/our-tradition.component';
import { HomeComponent } from './home/home.component';
import { TreasureComponent } from './treasure/treasure.component';

const appRoutes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'treasure', component: TreasureComponent },
  { path: 'our-tradition', component: OurTraditionComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
