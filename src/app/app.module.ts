import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, 
        MatCheckboxModule, 
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatCardModule, 
        MatDividerModule,
        MatGridListModule,
        MatExpansionModule,
        MatToolbarModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


import { Observable } from 'rxjs';

import {
  IMqttMessage,
  MqttModule,
  IMqttServiceOptions
} from 'ngx-mqtt';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'holltec.mx',
  username: 'root',
  password: 'navojoa2019',
  port: 9001,
  path: '/mqtt'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatExpansionModule,
    NgxMaterialTimepickerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
