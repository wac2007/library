import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { appRoutes } from './pages/routes';
import { PagesModule } from './pages/pages.module';


@NgModule({
  id: module.id,
  declarations: [
    AppComponent,
    CoreComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
