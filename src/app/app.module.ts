import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { Ng2Webstorage } from 'ngx-webstorage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared';
import { LayoutModule } from './layout';
import { HomeModule } from './home';
import { LoginModule } from './login';
import { OrdersModule } from './orders';
import { CustomersModule } from './customers';
import { ReportsModule } from './reports';

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
    SharedModule,
    LayoutModule,
    HomeModule,
    LoginModule,
    OrdersModule,
    CustomersModule,
    ReportsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
