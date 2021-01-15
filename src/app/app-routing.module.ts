import { RezepteComponent } from './hofladen/rezepte/rezepte.component';
import { OnlineShopComponent } from './online-shop/online-shop.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { AboutComponent } from './about/about.component';
import { HofladenComponent } from './hofladen/hofladen.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LimousinhofComponent } from './limousinhof/limousinhof.component';
import { PferdestallComponent } from './pferdestall/pferdestall.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'hofladen', component: HofladenComponent},
  {path: 'hofladen/:rezepte', component: RezepteComponent},

  {path: 'about', component: AboutComponent},
  {path: 'kontakt', component: KontaktComponent},
  {path: 'limousinhof', component: LimousinhofComponent},
  {path: 'pferdestall', component: PferdestallComponent},
  {path: 'online-shop', component: OnlineShopComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
