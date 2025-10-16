import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { Child } from './components/child/child';
import { Parent } from './components/parent/parent';
import { Header } from './components/header/header';
import { Sender } from './components/sender/sender';
import { Logger } from './components/logger/logger';

@NgModule({
  declarations: [App, Parent, Child, Header, Sender, Logger],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
