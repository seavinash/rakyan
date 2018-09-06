import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app.routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { OurTraditionComponent } from './our-tradition/our-tradition.component';
import { HomeComponent } from './home/home.component';
import { TreasureComponent } from './treasure/treasure.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OurTraditionComponent,
    TreasureComponent,
    AppComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class AppModule { }
