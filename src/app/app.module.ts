import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideComponent } from './side/side.component';
import {Ng2CarouselamosModule} from 'ng2-carouselamos';
import { CarousalComponent } from './carousal/carousal.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { UserNameComponent } from './user-name/user-name.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideComponent,
    CarousalComponent,
    SearchResultComponent,
    UserNameComponent,
    HomeComponent,
    ProfileComponent,
    NotFoundComponent,
    SearchComponent,
    FooterComponent,
    ContentComponent,
    AboutComponent,
    ContactusComponent
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    Ng2CarouselamosModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { 
        path: '' ,
        component:HomeComponent
      },
      {
       path: 'profile',
       component:ProfileComponent
      },
      {
        path: 'contact',
        component:ContactusComponent
       },
      {
        path: '**',
        component:NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
