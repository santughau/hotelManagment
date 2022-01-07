import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './pages/components/notifications/notifications.component';
import { AddressComponent } from './pages/components/address/address.component';
import { CoupanComponent } from './pages/components/coupan/coupan.component';

@NgModule({
    declarations: [AppComponent, NotificationsComponent,AddressComponent,CoupanComponent],
    imports: [BrowserModule, CommonModule, FormsModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    bootstrap: [AppComponent]
})
export class AppModule {}
