import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Soma } from './contador/soma/soma';
import { ContadorModule } from './contador/contador-module';
import { EstruturaModule } from './estrutura/estrutura-module';
import { ProdutosModule } from './produtos/produtos-module';

@NgModule({
  declarations: [
    App,
    Soma
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContadorModule,
    EstruturaModule,
    ProdutosModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }