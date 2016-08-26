import { NgModule }      from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import{SearchComponent} from  './components/search/search.component'
import{AboutComponent} from './components/about/about.component'
import {NavbarComponent} from './components/navbar/navbar.component';
import{appRouterProviders} from './app.routes'
import{ROUTER_DIRECTIVES} from '@angular/router'
import {SpotifyService} from './services/spotify.service'
import {ArtistComponent} from './components/artist/artist.component'




@NgModule({
  imports: [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,SearchComponent,AboutComponent,NavbarComponent,ArtistComponent],
  bootstrap: [AppComponent],
  providers:[appRouterProviders]
})
export class AppModule { }
