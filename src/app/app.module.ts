import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { DeviceComponent } from './device/device.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ConfigComponent } from './config/config.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    TabbarComponent,
    HomeComponent,
    DeviceComponent,
    StatisticsComponent,
    ConfigComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    OnsenModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DeviceComponent],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }
