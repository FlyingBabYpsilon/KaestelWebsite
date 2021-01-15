import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HofladenComponent } from './hofladen/hofladen.component';
import { LimousinhofComponent } from './limousinhof/limousinhof.component';
import { PferdestallComponent } from './pferdestall/pferdestall.component';
import { AboutComponent } from './about/about.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { OnlineShopComponent } from './online-shop/online-shop.component';
import { RezepteComponent } from './hofladen/rezepte/rezepte.component';
import { SortimentComponent } from './hofladen/sortiment/sortiment.component';
import { LadenComponent } from './hofladen/laden/laden.component';
import { AutomatComponent } from './hofladen/automat/automat.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HofladenComponent,
    LimousinhofComponent,
    PferdestallComponent,
    AboutComponent,
    KontaktComponent,
    OnlineShopComponent,
    RezepteComponent,
    SortimentComponent,
    LadenComponent,
    AutomatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
