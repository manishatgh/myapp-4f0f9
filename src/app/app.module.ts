import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    MyPortfolioComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {
    path: 'about-me',
    component: AboutMeComponent
    },
    {
    path: 'my-portfolio',
    component: MyPortfolioComponent
    },
    {
    path: 'contact-me',
    component: ContactMeComponent
    },
    {
    path: '',
    redirectTo: 'about-me',
    pathMatch: 'full'
    },
    {
    path: '**',
    redirectTo: 'about-me',
    pathMatch: 'full'
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
