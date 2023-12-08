import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { CardModule } from 'primeng/card';
import { MealmenuComponent } from './components/mealmenu/mealmenu.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { YoutubeplayerComponent } from './components/youtubeplayer/youtubeplayer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { HistoriaComponent } from './historia/historia.component';
@NgModule({
  declarations: [
    AppComponent,
    InformacionComponent,
    MealmenuComponent,
    FooterComponent,
    YoutubeplayerComponent,
    CarouselComponent,
    HomeComponent,
    HistoriaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    CardModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
