import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsPipe } from './details.pipe';
import { GenerationFiltrePipe } from './pipes/generation-filtre.pipe';
import { TypeDefencePipe } from './pipes/type-defence.pipe';
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [AppComponent, DetailsPipe, GenerationFiltrePipe, TypeDefencePipe, KeysPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
