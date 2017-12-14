import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular';
import { Ng2Webstorage } from 'ngx-webstorage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { OrdersModule } from './orders/orders.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ClarityModule.forRoot(),
    BrowserModule,
    Ng2Webstorage.forRoot({
      prefix: 'mc',
      separator: '.',
      caseSensitive: true
    }),
    CoreModule,
    LayoutModule,
    HomeModule,
    LoginModule,
    OrdersModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
