import { Component, ViewChild, ElementRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MqttService, IMqttMessage } from 'ngx-mqtt';
import { MatSlideToggleChange, MatSlideToggle } from '@angular/material';
import { stat } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hollman';
  sonoffName = 'bodega6';
  private subscription: Subscription;
  public message: string;

  statusMsg = '';
  statusJson = '';
  c1dateTimeMsg = '';
  c1dateTimeJson = '';
  c1fechaSensor = 'NO CONECTADO ...';
  c1horaSensor = '';

  //CONTROL 1
  @ViewChild('hora01', { static: false }) hora01: ElementRef;
  @ViewChild('hora02', { static: false }) hora02: ElementRef;
  @ViewChild('hora09', { static: false }) hora09: ElementRef;
  @ViewChild('hora10', { static: false }) hora10: ElementRef;
  c1PowerR = '';
  c1PowerL;

  c1timer01 = 'Cargando ...';
  c1timer02 = 'Cargando ...';
  c1daysR = '';
  c1daysLabel = 'Cargando ...';
  c1DayD;
  c1DayL;
  c1DayM;
  c1DayX;
  c1DayJ;
  c1DayV;
  c1DayS;
  c1DaysP;

  c1time01;
  c1h01;
  c1m01;
  c1T1Armed;
  c1T1ArmedN;
  c1T1ArmedR;
  c1T1ArmedRLabel;
  c1time02;
  c1h02;
  c1m02;
  c1T2Armed;
  c1T2ArmedN;
  c1T2ArmedR;
  c1T2ArmedRLabel;

  c1timer09 = 'Cargando ...';
  c1timer10 = 'Cargando ...';
  c1daysR2 = '';
  c1daysLabel2 = 'Cargando ...';
  c1DayD2;
  c1DayL2;
  c1DayM2;
  c1DayX2;
  c1DayJ2;
  c1DayV2;
  c1DayS2;
  c1DaysP2;

  c1time09;
  c1h09;
  c1m09;
  c1T9Armed;
  c1T9ArmedN;
  c1T9ArmedR;
  c1T9ArmedRLabel;
  c1time10;
  c1h10;
  c1m10;
  c1T10Armed;
  c1T10ArmedN;
  c1T10ArmedR;
  c1T10ArmedRLabel;

  //CONTROL 2
  @ViewChild('hora03', { static: false }) hora03: ElementRef;
  @ViewChild('hora04', { static: false }) hora04: ElementRef;
  @ViewChild('hora11', { static: false }) hora11: ElementRef;
  @ViewChild('hora12', { static: false }) hora12: ElementRef;
  
  c2PowerR = '';
  c2PowerL;

  c2timer03 = 'Cargando ...';
  c2timer04 = 'Cargando ...';
  c2daysR = '';
  c2daysLabel = 'Cargando ...';
  c2DayD;
  c2DayL;
  c2DayM;
  c2DayX;
  c2DayJ;
  c2DayV;
  c2DayS;
  c2DaysP;
  c2time03;
  c2h03;
  c2m03;
  c2T3Armed;
  c2T3ArmedN;
  c2T3ArmedR;
  c2T3ArmedRLabel;
  c2time04;
  c2h04;
  c2m04;
  c2T4Armed;
  c2T4ArmedN;
  c2T4ArmedR;
  c2T4ArmedRLabel;
  
  c2timer11 = 'Cargando ...';
  c2timer12 = 'Cargando ...';
  c2daysR2 = '';
  c2daysLabel2 = 'Cargando ...';
  c2DayD2;
  c2DayL2;
  c2DayM2;
  c2DayX2;
  c2DayJ2;
  c2DayV2;
  c2DayS2;
  c2DaysP2;

  c2time11;
  c2h11;
  c2m11;
  c2T11Armed;
  c2T11ArmedN;
  c2T11ArmedR;
  c2T11ArmedRLabel;
  c2time12;
  c2h12;
  c2m12;
  c2T12Armed;
  c2T12ArmedN;
  c2T12ArmedR;
  c2T12ArmedRLabel;

   //CONTROL 3
   @ViewChild('hora05', { static: false }) hora05: ElementRef;
   @ViewChild('hora06', { static: false }) hora06: ElementRef;
   @ViewChild('hora13', { static: false }) hora13: ElementRef;
   @ViewChild('hora14', { static: false }) hora14: ElementRef;
   
   c3PowerR = '';
   c3PowerL;
 
   c3timer05 = 'Cargando ...';
   c3timer06 = 'Cargando ...';
   c3daysR = '';
   c3daysLabel = 'Cargando ...';
   c3DayD;
   c3DayL;
   c3DayM;
   c3DayX;
   c3DayJ;
   c3DayV;
   c3DayS;
   c3DaysP;
 
   c3time05;
   c3h05;
   c3m05;
   c3T5Armed;
   c3T5ArmedN;
   c3T5ArmedR;
   c3T5ArmedRLabel;
   c3time06;
   c3h06;
   c3m06;
   c3T6Armed;
   c3T6ArmedN;
   c3T6ArmedR;
   c3T6ArmedRLabel;
   
   c3timer13 = 'Cargando ...';
   c3timer14 = 'Cargando ...';
   c3daysR2 = '';
   c3daysLabel2 = 'Cargando ...';
   c3DayD2;
   c3DayL2;
   c3DayM2;
   c3DayX2;
   c3DayJ2;
   c3DayV2;
   c3DayS2;
   c3DaysP2;
 
   c3time13;
   c3h13;
   c3m13;
   c3T13Armed;
   c3T13ArmedN;
   c3T13ArmedR;
   c3T13ArmedRLabel;
   c3time14;
   c3h14;
   c3m14;
   c3T14Armed;
   c3T14ArmedN;
   c3T14ArmedR;
   c3T14ArmedRLabel;

  //CONTROL 4
  @ViewChild('hora07', { static: false }) hora07: ElementRef;
  @ViewChild('hora08', { static: false }) hora08: ElementRef;
  @ViewChild('hora15', { static: false }) hora15: ElementRef;
  @ViewChild('hora16', { static: false }) hora16: ElementRef;
  c4PowerR = '';
  c4PowerL;

  c4timer07 = 'Cargando ...';
  c4timer08 = 'Cargando ...';
  c4daysR = '';
  c4daysLabel = 'Cargando ...';
  c4DayD;
  c4DayL;
  c4DayM;
  c4DayX;
  c4DayJ;
  c4DayV;
  c4DayS;
  c4DaysP;

  c4time07;
  c4h07;
  c4m07;
  c4T7Armed;
  c4T7ArmedN;
  c4T7ArmedR;
  c4T7ArmedRLabel;
  c4time08;
  c4h08;
  c4m08;
  c4T8Armed;
  c4T8ArmedN;
  c4T8ArmedR;
  c4T8ArmedRLabel;

  c4timer15 = 'Cargando ...';
  c4timer16 = 'Cargando ...';
  c4daysR2 = '';
  c4daysLabel2 = 'Cargando ...';
  c4DayD2;
  c4DayL2;
  c4DayM2;
  c4DayX2;
  c4DayJ2;
  c4DayV2;
  c4DayS2;
  c4DaysP2;

  c4time15;
  c4h15;
  c4m15;
  c4T15Armed;
  c4T15ArmedN;
  c4T15ArmedR;
  c4T15ArmedRLabel;
  c4time16;
  c4h16;
  c4m16;
  c4T16Armed;
  c4T16ArmedN;
  c4T16ArmedR;
  c4T16ArmedRLabel;


  /////////////////////////////////////////////////////////
  constructor(private _mqttService: MqttService) {
    this.publica();

    this.subscription = this._mqttService.observe('stat/' + this.sonoffName + '/POWER1').subscribe((message: IMqttMessage) => {
      this.c1PowerR = message.payload.toString();
      //console.log(this.msg);

      if (this.c1PowerR == "ON") {
        this.c1PowerL = true;
      }
      if (this.c1PowerR == "OFF") {
        this.c1PowerL = false;
      }
    });

    this._mqttService.observe('stat/' + this.sonoffName + '/POWER2').subscribe((message: IMqttMessage) => {
      this.c2PowerR = message.payload.toString();
      //console.log(this.msg);

      if (this.c2PowerR == "ON") {
        this.c2PowerL = true;
      }
      if (this.c2PowerR == "OFF") {
        this.c2PowerL = false;
      }
    });

    this._mqttService.observe('stat/' + this.sonoffName + '/POWER3').subscribe((message: IMqttMessage) => {
      this.c3PowerR = message.payload.toString();
      //console.log(this.msg);

      if (this.c3PowerR == "ON") {
        this.c3PowerL = true;
      }
      if (this.c3PowerR == "OFF") {
        this.c3PowerL = false;
      }
    });

    this._mqttService.observe('stat/' + this.sonoffName + '/POWER4').subscribe((message: IMqttMessage) => {
      this.c4PowerR = message.payload.toString();
      //console.log(this.msg);

      if (this.c4PowerR == "ON") {
        this.c4PowerL = true;
      }
      if (this.c4PowerR == "OFF") {
        this.c4PowerL = false;
      }
    });

    this._mqttService.observe('stat/' + this.sonoffName + '/STATUS8').subscribe((message: IMqttMessage) => {
      this.c1dateTimeMsg = message.payload.toString();
      console.log(this.c1dateTimeMsg);
      this.c1dateTimeJson = JSON.parse(this.c1dateTimeMsg); // parse json data and pass json string
      this.c1fechaSensor = this.convertirFecha(this.c1dateTimeJson['StatusSNS']['Time'].toString().substring(0, 10));
      this.c1horaSensor = this.c1dateTimeJson['StatusSNS']['Time'].toString().substring(11, 16);
    });

    this._mqttService.observe('stat/' + this.sonoffName + '/RESULT').subscribe((message: IMqttMessage) => {
      this.statusMsg = message.payload.toString();
      //console.log(this.statusMsg);
      this.statusJson = JSON.parse(this.statusMsg); // parse json data and pass json string

      if (this.statusJson['Timers1'] != null) 
      {
        //CONTROL 1
        this.c1daysR = this.statusJson['Timers1']['Timer1']['Days'].toString();
        if (this.c1daysR[0] == '1') { this.c1daysLabel = 'D'; this.c1DayD = true; } else { this.c1daysLabel = '-'; this.c1DayD = false; }
        if (this.c1daysR[1] == '1') { this.c1daysLabel += 'L'; this.c1DayL = true; } else { this.c1daysLabel += '-'; this.c1DayL = false; }
        if (this.c1daysR[2] == '1') { this.c1daysLabel += 'M'; this.c1DayM = true; } else { this.c1daysLabel += '-'; this.c1DayM = false; }
        if (this.c1daysR[3] == '1') { this.c1daysLabel += 'X'; this.c1DayX = true; } else { this.c1daysLabel += '-'; this.c1DayX = false; }
        if (this.c1daysR[4] == '1') { this.c1daysLabel += 'J'; this.c1DayJ = true; } else { this.c1daysLabel += '-'; this.c1DayJ = false; }
        if (this.c1daysR[5] == '1') { this.c1daysLabel += 'V'; this.c1DayV = true; } else { this.c1daysLabel += '-'; this.c1DayV = false; }
        if (this.c1daysR[6] == '1') { this.c1daysLabel += 'S'; this.c1DayS = true; } else { this.c1daysLabel += '-'; this.c1DayS = false; }

        this.c1timer01 = this.statusJson['Timers1']['Timer1']['Time'].toString();
        this.c1T1ArmedR = this.statusJson['Timers1']['Timer1']['Arm'].toString();
        if (this.c1T1ArmedR == "1") {
          this.c1T1ArmedRLabel = "Activo";
          this.c1T1Armed = true;
        }
        else {
          this.c1T1ArmedRLabel = "Inactivo";
          this.c1T1Armed = false;
        }

        this.c1timer02 = this.statusJson['Timers1']['Timer2']['Time'].toString();
        this.c1T2ArmedR = this.statusJson['Timers1']['Timer2']['Arm'].toString();
        if (this.c1T2ArmedR == "1") {
          this.c1T2ArmedRLabel = "Activo";
          this.c1T2Armed = true;
        }
        else {
          this.c1T2ArmedRLabel = "Inactivo";
          this.c1T2Armed = false;
        }

        this.hora01['hour'] = this.c1timer01.substring(0, 2);
        this.hora01['minute'] = this.c1timer01.substring(3, 5);
        this.hora02['hour'] = this.c1timer02.substring(0, 2);
        this.hora02['minute'] = this.c1timer02.substring(3, 5);

        //CONTROL 2
        this.c2daysR = this.statusJson['Timers1']['Timer3']['Days'].toString();
        if (this.c2daysR[0] == '1') { this.c2daysLabel = 'D'; this.c2DayD = true; } else { this.c2daysLabel = '-'; this.c2DayD = false; }
        if (this.c2daysR[1] == '1') { this.c2daysLabel += 'L'; this.c2DayL = true; } else { this.c2daysLabel += '-'; this.c2DayL = false; }
        if (this.c2daysR[2] == '1') { this.c2daysLabel += 'M'; this.c2DayM = true; } else { this.c2daysLabel += '-'; this.c2DayM = false; }
        if (this.c2daysR[3] == '1') { this.c2daysLabel += 'X'; this.c2DayX = true; } else { this.c2daysLabel += '-'; this.c2DayX = false; }
        if (this.c2daysR[4] == '1') { this.c2daysLabel += 'J'; this.c2DayJ = true; } else { this.c2daysLabel += '-'; this.c2DayJ = false; }
        if (this.c2daysR[5] == '1') { this.c2daysLabel += 'V'; this.c2DayV = true; } else { this.c2daysLabel += '-'; this.c2DayV = false; }
        if (this.c2daysR[6] == '1') { this.c2daysLabel += 'S'; this.c2DayS = true; } else { this.c2daysLabel += '-'; this.c2DayS = false; }

        this.c2timer03 = this.statusJson['Timers1']['Timer3']['Time'].toString();
        this.c2T3ArmedR = this.statusJson['Timers1']['Timer3']['Arm'].toString();
        if (this.c2T3ArmedR == "1") {
          this.c2T3ArmedRLabel = "Activo";
          this.c2T3Armed = true;
        }
        else {
          this.c2T3ArmedRLabel = "Inactivo";
          this.c2T3Armed = false;
        }

        this.c2timer04 = this.statusJson['Timers1']['Timer4']['Time'].toString();
        this.c2T4ArmedR = this.statusJson['Timers1']['Timer4']['Arm'].toString();
        if (this.c2T4ArmedR == "1") {
          this.c2T4ArmedRLabel = "Activo";
          this.c2T4Armed = true;
        }
        else {
          this.c2T4ArmedRLabel = "Inactivo";
          this.c2T4Armed = false;
        }

        this.hora03['hour'] = this.c2timer03.substring(0, 2);
        this.hora03['minute'] = this.c2timer03.substring(3, 5);
        this.hora04['hour'] = this.c2timer04.substring(0, 2);
        this.hora04['minute'] = this.c2timer04.substring(3, 5);

      }

      if (this.statusJson['Timers2'] != null) 
      {
        //CONTROL 3 t5,6,13,14
        this.c3daysR = this.statusJson['Timers2']['Timer5']['Days'].toString();
        if (this.c3daysR[0] == '1') { this.c3daysLabel = 'D'; this.c3DayD = true; } else { this.c3daysLabel = '-'; this.c3DayD = false; }
        if (this.c3daysR[1] == '1') { this.c3daysLabel += 'L'; this.c3DayL = true; } else { this.c3daysLabel += '-'; this.c3DayL = false; }
        if (this.c3daysR[2] == '1') { this.c3daysLabel += 'M'; this.c3DayM = true; } else { this.c3daysLabel += '-'; this.c3DayM = false; }
        if (this.c3daysR[3] == '1') { this.c3daysLabel += 'X'; this.c3DayX = true; } else { this.c3daysLabel += '-'; this.c3DayX = false; }
        if (this.c3daysR[4] == '1') { this.c3daysLabel += 'J'; this.c3DayJ = true; } else { this.c3daysLabel += '-'; this.c3DayJ = false; }
        if (this.c3daysR[5] == '1') { this.c3daysLabel += 'V'; this.c3DayV = true; } else { this.c3daysLabel += '-'; this.c3DayV = false; }
        if (this.c3daysR[6] == '1') { this.c3daysLabel += 'S'; this.c3DayS = true; } else { this.c3daysLabel += '-'; this.c3DayS = false; }

        this.c3timer05 = this.statusJson['Timers2']['Timer5']['Time'].toString();
        this.c3T5ArmedR = this.statusJson['Timers2']['Timer5']['Arm'].toString();
        if (this.c3T5ArmedR == "1") {
          this.c3T5ArmedRLabel = "Activo";
          this.c3T5Armed = true;
        }
        else {
          this.c3T5ArmedRLabel = "Inactivo";
          this.c3T5Armed = false;
        }

        this.c3timer06 = this.statusJson['Timers2']['Timer6']['Time'].toString();
        this.c3T6ArmedR = this.statusJson['Timers2']['Timer6']['Arm'].toString();
        if (this.c3T6ArmedR == "1") {
          this.c3T6ArmedRLabel = "Activo";
          this.c3T6Armed = true;
        }
        else {
          this.c3T6ArmedRLabel = "Inactivo";
          this.c3T6Armed = false;
        }

        this.hora05['hour'] = this.c3timer05.substring(0, 2);
        this.hora05['minute'] = this.c3timer05.substring(3, 5);
        this.hora06['hour'] = this.c3timer06.substring(0, 2);
        this.hora06['minute'] = this.c3timer06.substring(3, 5);

        //CONTROL 4 t7,8,15,16
        this.c4daysR = this.statusJson['Timers2']['Timer7']['Days'].toString();
        if (this.c4daysR[0] == '1') { this.c4daysLabel = 'D'; this.c4DayD = true; } else { this.c4daysLabel = '-'; this.c4DayD = false; }
        if (this.c4daysR[1] == '1') { this.c4daysLabel += 'L'; this.c4DayL = true; } else { this.c4daysLabel += '-'; this.c4DayL = false; }
        if (this.c4daysR[2] == '1') { this.c4daysLabel += 'M'; this.c4DayM = true; } else { this.c4daysLabel += '-'; this.c4DayM = false; }
        if (this.c4daysR[3] == '1') { this.c4daysLabel += 'X'; this.c4DayX = true; } else { this.c4daysLabel += '-'; this.c4DayX = false; }
        if (this.c4daysR[4] == '1') { this.c4daysLabel += 'J'; this.c4DayJ = true; } else { this.c4daysLabel += '-'; this.c4DayJ = false; }
        if (this.c4daysR[5] == '1') { this.c4daysLabel += 'V'; this.c4DayV = true; } else { this.c4daysLabel += '-'; this.c4DayV = false; }
        if (this.c4daysR[6] == '1') { this.c4daysLabel += 'S'; this.c4DayS = true; } else { this.c4daysLabel += '-'; this.c4DayS = false; }

        this.c4timer07 = this.statusJson['Timers2']['Timer7']['Time'].toString();
        this.c4T7ArmedR = this.statusJson['Timers2']['Timer7']['Arm'].toString();
        if (this.c4T7ArmedR == "1") {
          this.c4T7ArmedRLabel = "Activo";
          this.c4T7Armed = true;
        }
        else {
          this.c4T7ArmedRLabel = "Inactivo";
          this.c4T7Armed = false;
        }

        this.c4timer08 = this.statusJson['Timers2']['Timer8']['Time'].toString();
        this.c4T8ArmedR = this.statusJson['Timers2']['Timer8']['Arm'].toString();
        if (this.c4T8ArmedR == "1") {
          this.c4T8ArmedRLabel = "Activo";
          this.c4T8Armed = true;
        }
        else {
          this.c4T8ArmedRLabel = "Inactivo";
          this.c4T8Armed = false;
        }

        this.hora07['hour'] = this.c4timer07.substring(0, 2);
        this.hora07['minute'] = this.c4timer07.substring(3, 5);
        this.hora08['hour'] = this.c4timer08.substring(0, 2);
        this.hora08['minute'] = this.c4timer08.substring(3, 5);

      }

      if (this.statusJson['Timers3'] != null) 
      {
        //CONTROL 1
        this.c1daysR2 = this.statusJson['Timers3']['Timer9']['Days'].toString();
        if (this.c1daysR2[0] == '1') { this.c1daysLabel2 = 'D'; this.c1DayD2 = true; } else { this.c1daysLabel2 = '-'; this.c1DayD2 = false; }
        if (this.c1daysR2[1] == '1') { this.c1daysLabel2 += 'L'; this.c1DayL2 = true; } else { this.c1daysLabel2 += '-'; this.c1DayL2 = false; }
        if (this.c1daysR2[2] == '1') { this.c1daysLabel2 += 'M'; this.c1DayM2 = true; } else { this.c1daysLabel2 += '-'; this.c1DayM2 = false; }
        if (this.c1daysR2[3] == '1') { this.c1daysLabel2 += 'X'; this.c1DayX2 = true; } else { this.c1daysLabel2 += '-'; this.c1DayX2 = false; }
        if (this.c1daysR2[4] == '1') { this.c1daysLabel2 += 'J'; this.c1DayJ2 = true; } else { this.c1daysLabel2 += '-'; this.c1DayJ2 = false; }
        if (this.c1daysR2[5] == '1') { this.c1daysLabel2 += 'V'; this.c1DayV2 = true; } else { this.c1daysLabel2 += '-'; this.c1DayV2 = false; }
        if (this.c1daysR2[6] == '1') { this.c1daysLabel2 += 'S'; this.c1DayS2 = true; } else { this.c1daysLabel2 += '-'; this.c1DayS2 = false; }

        this.c1timer09 = this.statusJson['Timers3']['Timer9']['Time'].toString();
        this.c1T9ArmedR = this.statusJson['Timers3']['Timer9']['Arm'].toString();
        if (this.c1T9ArmedR == "1") {
          this.c1T9ArmedRLabel = "Activo";
          this.c1T9Armed = true;
        }
        else {
          this.c1T9ArmedRLabel = "Inactivo";
          this.c1T9Armed = false;
        }

        this.c1timer10 = this.statusJson['Timers3']['Timer10']['Time'].toString();
        this.c1T10ArmedR = this.statusJson['Timers3']['Timer10']['Arm'].toString();
        if (this.c1T10ArmedR == "1") {
          this.c1T10ArmedRLabel = "Activo";
          this.c1T10Armed = true;
        }
        else {
          this.c1T10ArmedRLabel = "Inactivo";
          this.c1T10Armed = false;
        }

        this.hora09['hour'] = this.c1timer09.substring(0, 2);
        this.hora09['minute'] = this.c1timer09.substring(3, 5);
        this.hora10['hour'] = this.c1timer10.substring(0, 2);
        this.hora10['minute'] = this.c1timer10.substring(3, 5);

        //CONTROL 2
        this.c2daysR2 = this.statusJson['Timers3']['Timer11']['Days'].toString();
        if (this.c2daysR2[0] == '1') { this.c2daysLabel2 = 'D'; this.c2DayD2 = true; } else { this.c2daysLabel2 = '-'; this.c2DayD2 = false; }
        if (this.c2daysR2[1] == '1') { this.c2daysLabel2 += 'L'; this.c2DayL2 = true; } else { this.c2daysLabel2 += '-'; this.c2DayL2 = false; }
        if (this.c2daysR2[2] == '1') { this.c2daysLabel2 += 'M'; this.c2DayM2 = true; } else { this.c2daysLabel2 += '-'; this.c2DayM2 = false; }
        if (this.c2daysR2[3] == '1') { this.c2daysLabel2 += 'X'; this.c2DayX2 = true; } else { this.c2daysLabel2 += '-'; this.c2DayX2 = false; }
        if (this.c2daysR2[4] == '1') { this.c2daysLabel2 += 'J'; this.c2DayJ2 = true; } else { this.c2daysLabel2 += '-'; this.c2DayJ2 = false; }
        if (this.c2daysR2[5] == '1') { this.c2daysLabel2 += 'V'; this.c2DayV2 = true; } else { this.c2daysLabel2 += '-'; this.c2DayV2 = false; }
        if (this.c2daysR2[6] == '1') { this.c2daysLabel2 += 'S'; this.c2DayS2 = true; } else { this.c2daysLabel2 += '-'; this.c2DayS2 = false; }

        this.c2timer11 = this.statusJson['Timers3']['Timer11']['Time'].toString();
        this.c2T11ArmedR = this.statusJson['Timers3']['Timer11']['Arm'].toString();
        if (this.c2T11ArmedR == "1") {
          this.c2T11ArmedRLabel = "Activo";
          this.c2T11Armed = true;
        }
        else {
          this.c2T11ArmedRLabel = "Inactivo";
          this.c2T11Armed = false;
        }

        this.c2timer12 = this.statusJson['Timers3']['Timer12']['Time'].toString();
        this.c2T12ArmedR = this.statusJson['Timers3']['Timer12']['Arm'].toString();
        if (this.c2T12ArmedR == "1") {
          this.c2T12ArmedRLabel = "Activo";
          this.c2T12Armed = true;
        }
        else {
          this.c2T12ArmedRLabel = "Inactivo";
          this.c2T12Armed = false;
        }

        this.hora11['hour'] = this.c2timer11.substring(0, 2);
        this.hora11['minute'] = this.c2timer11.substring(3, 5);
        this.hora12['hour'] = this.c2timer12.substring(0, 2);
        this.hora12['minute'] = this.c2timer12.substring(3, 5);

      }

      if (this.statusJson['Timers4'] != null) 
      {
        //CONTROL 3
        this.c3daysR2 = this.statusJson['Timers4']['Timer13']['Days'].toString();
        if (this.c3daysR2[0] == '1') { this.c3daysLabel2 = 'D'; this.c3DayD2 = true; } else { this.c3daysLabel2 = '-'; this.c3DayD2 = false; }
        if (this.c3daysR2[1] == '1') { this.c3daysLabel2 += 'L'; this.c3DayL2 = true; } else { this.c3daysLabel2 += '-'; this.c3DayL2 = false; }
        if (this.c3daysR2[2] == '1') { this.c3daysLabel2 += 'M'; this.c3DayM2 = true; } else { this.c3daysLabel2 += '-'; this.c3DayM2 = false; }
        if (this.c3daysR2[3] == '1') { this.c3daysLabel2 += 'X'; this.c3DayX2 = true; } else { this.c3daysLabel2 += '-'; this.c3DayX2 = false; }
        if (this.c3daysR2[4] == '1') { this.c3daysLabel2 += 'J'; this.c3DayJ2 = true; } else { this.c3daysLabel2 += '-'; this.c3DayJ2 = false; }
        if (this.c3daysR2[5] == '1') { this.c3daysLabel2 += 'V'; this.c3DayV2 = true; } else { this.c3daysLabel2 += '-'; this.c3DayV2 = false; }
        if (this.c3daysR2[6] == '1') { this.c3daysLabel2 += 'S'; this.c3DayS2 = true; } else { this.c3daysLabel2 += '-'; this.c3DayS2 = false; }

        this.c3timer13 = this.statusJson['Timers4']['Timer13']['Time'].toString();
        this.c3T13ArmedR = this.statusJson['Timers4']['Timer13']['Arm'].toString();
        if (this.c3T13ArmedR == "1") {
          this.c3T13ArmedRLabel = "Activo";
          this.c3T13Armed = true;
        }
        else {
          this.c3T13ArmedRLabel = "Inactivo";
          this.c3T13Armed = false;
        }

        this.c3timer14 = this.statusJson['Timers4']['Timer14']['Time'].toString();
        this.c3T14ArmedR = this.statusJson['Timers4']['Timer14']['Arm'].toString();
        if (this.c3T14ArmedR == "1") {
          this.c3T14ArmedRLabel = "Activo";
          this.c3T14Armed = true;
        }
        else {
          this.c3T14ArmedRLabel = "Inactivo";
          this.c3T14Armed = false;
        }

        this.hora13['hour'] = this.c3timer13.substring(0, 2);
        this.hora13['minute'] = this.c3timer13.substring(3, 5);
        this.hora14['hour'] = this.c3timer14.substring(0, 2);
        this.hora14['minute'] = this.c3timer14.substring(3, 5);

        //CONTROL 4
        this.c4daysR2 = this.statusJson['Timers4']['Timer15']['Days'].toString();
        if (this.c4daysR2[0] == '1') { this.c4daysLabel2 = 'D'; this.c4DayD2 = true; } else { this.c4daysLabel2 = '-'; this.c4DayD2 = false; }
        if (this.c4daysR2[1] == '1') { this.c4daysLabel2 += 'L'; this.c4DayL2 = true; } else { this.c4daysLabel2 += '-'; this.c4DayL2 = false; }
        if (this.c4daysR2[2] == '1') { this.c4daysLabel2 += 'M'; this.c4DayM2 = true; } else { this.c4daysLabel2 += '-'; this.c4DayM2 = false; }
        if (this.c4daysR2[3] == '1') { this.c4daysLabel2 += 'X'; this.c4DayX2 = true; } else { this.c4daysLabel2 += '-'; this.c4DayX2 = false; }
        if (this.c4daysR2[4] == '1') { this.c4daysLabel2 += 'J'; this.c4DayJ2 = true; } else { this.c4daysLabel2 += '-'; this.c4DayJ2 = false; }
        if (this.c4daysR2[5] == '1') { this.c4daysLabel2 += 'V'; this.c4DayV2 = true; } else { this.c4daysLabel2 += '-'; this.c4DayV2 = false; }
        if (this.c4daysR2[6] == '1') { this.c4daysLabel2 += 'S'; this.c4DayS2 = true; } else { this.c4daysLabel2 += '-'; this.c4DayS2 = false; }

        this.c4timer15 = this.statusJson['Timers4']['Timer15']['Time'].toString();
        this.c4T15ArmedR = this.statusJson['Timers4']['Timer15']['Arm'].toString();
        if (this.c4T15ArmedR == "1") {
          this.c4T15ArmedRLabel = "Activo";
          this.c4T15Armed = true;
        }
        else {
          this.c4T15ArmedRLabel = "Inactivo";
          this.c4T15Armed = false;
        }

        this.c4timer16 = this.statusJson['Timers4']['Timer16']['Time'].toString();
        this.c4T16ArmedR = this.statusJson['Timers4']['Timer16']['Arm'].toString();
        if (this.c4T16ArmedR == "1") {
          this.c4T16ArmedRLabel = "Activo";
          this.c4T16Armed = true;
        }
        else {
          this.c4T16ArmedRLabel = "Inactivo";
          this.c4T16Armed = false;
        }

        this.hora15['hour'] = this.c4timer15.substring(0, 2);
        this.hora15['minute'] = this.c4timer15.substring(3, 5);
        this.hora16['hour'] = this.c4timer16.substring(0, 2);
        this.hora16['minute'] = this.c4timer16.substring(3, 5);

      }
      //this.c1fechaSensor = this.convertirFecha(this.c1dateTimeJson['StatusSNS']['Time'].toString().substring(0, 10));
      //this.c1horaSensor = this.c1dateTimeJson['StatusSNS']['Time'].toString().substring(11, 16);
    });


  }

  publica() {
    this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/POWER1", "", { qos: 0, retain: false });
    this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/POWER2", "", { qos: 0, retain: false });
    this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/POWER3", "", { qos: 0, retain: false });
    this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/POWER4", "", { qos: 0, retain: false });
    this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/Status", "8", { qos: 0, retain: false });
    this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/timers", "", { qos: 0, retain: false });
  }


  handleProgramar(event: Event) {
    console.log('Programar', event);

    //CONTROL 1
    //S1
    this.c1h01 = this.hora01['hour'];
    this.c1m01 = this.hora01['minute'];
    this.c1time01 = this.c1h01 + ":" + this.c1m01;

    this.c1h02 = this.hora02['hour'];
    this.c1m02 = this.hora02['minute'];
    this.c1time02 = this.c1h02 + ":" + this.c1m02;

    if (this.c1T1Armed == true) this.c1T1ArmedN = 1; else this.c1T1ArmedN = 0;
    if (this.c1T2Armed == true) this.c1T2ArmedN = 1; else this.c1T2ArmedN = 0;    

    if (this.c1DayD == true) this.c1DaysP = '1'; else this.c1DaysP = '0';
    if (this.c1DayL == true) this.c1DaysP += '1'; else this.c1DaysP += '0';
    if (this.c1DayM == true) this.c1DaysP += '1'; else this.c1DaysP += '0';
    if (this.c1DayX == true) this.c1DaysP += '1'; else this.c1DaysP += '0';
    if (this.c1DayJ == true) this.c1DaysP += '1'; else this.c1DaysP += '0';
    if (this.c1DayV == true) this.c1DaysP += '1'; else this.c1DaysP += '0';
    if (this.c1DayS == true) this.c1DaysP += '1'; else this.c1DaysP += '0';


    //S2
    this.c1h09 = this.hora09['hour'];
    this.c1m09 = this.hora09['minute'];
    this.c1time09 = this.c1h09 + ":" + this.c1m09;

    this.c1h10 = this.hora10['hour'];
    this.c1m10 = this.hora10['minute'];
    this.c1time10 = this.c1h10 + ":" + this.c1m10;

    if (this.c1T9Armed == true) this.c1T9ArmedN = 1; else this.c1T9ArmedN = 0;
    if (this.c1T10Armed == true) this.c1T10ArmedN = 1; else this.c1T10ArmedN = 0;

    if (this.c1DayD2 == true) this.c1DaysP2 = '1'; else this.c1DaysP2 = '0';
    if (this.c1DayL2 == true) this.c1DaysP2 += '1'; else this.c1DaysP2 += '0';
    if (this.c1DayM2 == true) this.c1DaysP2 += '1'; else this.c1DaysP2 += '0';
    if (this.c1DayX2 == true) this.c1DaysP2 += '1'; else this.c1DaysP2 += '0';
    if (this.c1DayJ2 == true) this.c1DaysP2 += '1'; else this.c1DaysP2 += '0';
    if (this.c1DayV2 == true) this.c1DaysP2 += '1'; else this.c1DaysP2 += '0';
    if (this.c1DayS2 == true) this.c1DaysP2 += '1'; else this.c1DaysP2 += '0';



    //CONTROL 2
    //S1
    this.c2h03 = this.hora03['hour'];
    this.c2m03 = this.hora03['minute'];
    this.c2time03 = this.c2h03 + ":" + this.c2m03;

    this.c2h04 = this.hora04['hour'];
    this.c2m04 = this.hora04['minute'];
    this.c2time04 = this.c2h04 + ":" + this.c2m04;

    if (this.c2T3Armed == true) this.c2T3ArmedN = 1; else this.c2T3ArmedN = 0;
    if (this.c2T4Armed == true) this.c2T4ArmedN = 1; else this.c2T4ArmedN = 0;

    if (this.c2DayD == true) this.c2DaysP = '1'; else this.c2DaysP = '0';
    if (this.c2DayL == true) this.c2DaysP += '1'; else this.c2DaysP += '0';
    if (this.c2DayM == true) this.c2DaysP += '1'; else this.c2DaysP += '0';
    if (this.c2DayX == true) this.c2DaysP += '1'; else this.c2DaysP += '0';
    if (this.c2DayJ == true) this.c2DaysP += '1'; else this.c2DaysP += '0';
    if (this.c2DayV == true) this.c2DaysP += '1'; else this.c2DaysP += '0';
    if (this.c2DayS == true) this.c2DaysP += '1'; else this.c2DaysP += '0';
    
    //S2
    this.c2h11 = this.hora11['hour'];
    this.c2m11 = this.hora11['minute'];
    this.c2time11 = this.c2h11 + ":" + this.c2m11;

    this.c2h12 = this.hora12['hour'];
    this.c2m12 = this.hora12['minute'];
    this.c2time12 = this.c2h12 + ":" + this.c2m12;

    if (this.c2T11Armed == true) this.c2T11ArmedN = 1; else this.c2T11ArmedN = 0;
    if (this.c2T12Armed == true) this.c2T12ArmedN = 1; else this.c2T12ArmedN = 0;

    if (this.c2DayD2 == true) this.c2DaysP2 = '1'; else this.c2DaysP2 = '0';
    if (this.c2DayL2 == true) this.c2DaysP2 += '1'; else this.c2DaysP2 += '0';
    if (this.c2DayM2 == true) this.c2DaysP2 += '1'; else this.c2DaysP2 += '0';
    if (this.c2DayX2 == true) this.c2DaysP2 += '1'; else this.c2DaysP2 += '0';
    if (this.c2DayJ2 == true) this.c2DaysP2 += '1'; else this.c2DaysP2 += '0';
    if (this.c2DayV2 == true) this.c2DaysP2 += '1'; else this.c2DaysP2 += '0';
    if (this.c2DayS2 == true) this.c2DaysP2 += '1'; else this.c2DaysP2 += '0';

  //CONTROL 3
    //S1
    this.c3h05 = this.hora05['hour'];
    this.c3m05 = this.hora05['minute'];
    this.c3time05 = this.c3h05 + ":" + this.c3m05;

    this.c3h06 = this.hora06['hour'];
    this.c3m06 = this.hora06['minute'];
    this.c3time06 = this.c3h06 + ":" + this.c3m06;

    if (this.c3T5Armed == true) this.c3T5ArmedN = 1; else this.c3T5ArmedN = 0;
    if (this.c3T6Armed == true) this.c3T6ArmedN = 1; else this.c3T6ArmedN = 0;    

    if (this.c3DayD == true) this.c3DaysP = '1'; else this.c3DaysP = '0';
    if (this.c3DayL == true) this.c3DaysP += '1'; else this.c3DaysP += '0';
    if (this.c3DayM == true) this.c3DaysP += '1'; else this.c3DaysP += '0';
    if (this.c3DayX == true) this.c3DaysP += '1'; else this.c3DaysP += '0';
    if (this.c3DayJ == true) this.c3DaysP += '1'; else this.c3DaysP += '0';
    if (this.c3DayV == true) this.c3DaysP += '1'; else this.c3DaysP += '0';
    if (this.c3DayS == true) this.c3DaysP += '1'; else this.c3DaysP += '0';


    //S2
    this.c3h13 = this.hora13['hour'];
    this.c3m13 = this.hora13['minute'];
    this.c3time13 = this.c3h13 + ":" + this.c3m13;

    this.c3h14 = this.hora14['hour'];
    this.c3m14 = this.hora14['minute'];
    this.c3time14 = this.c3h14 + ":" + this.c3m14;

    if (this.c3T13Armed == true) this.c3T13ArmedN = 1; else this.c3T13ArmedN = 0;
    if (this.c3T14Armed == true) this.c3T14ArmedN = 1; else this.c3T14ArmedN = 0;

    if (this.c3DayD2 == true) this.c3DaysP2 = '1'; else this.c3DaysP2 = '0';
    if (this.c3DayL2 == true) this.c3DaysP2 += '1'; else this.c3DaysP2 += '0';
    if (this.c3DayM2 == true) this.c3DaysP2 += '1'; else this.c3DaysP2 += '0';
    if (this.c3DayX2 == true) this.c3DaysP2 += '1'; else this.c3DaysP2 += '0';
    if (this.c3DayJ2 == true) this.c3DaysP2 += '1'; else this.c3DaysP2 += '0';
    if (this.c3DayV2 == true) this.c3DaysP2 += '1'; else this.c3DaysP2 += '0';
    if (this.c3DayS2 == true) this.c3DaysP2 += '1'; else this.c3DaysP2 += '0';



    //CONTROL 4
    //S1
    this.c4h07 = this.hora07['hour'];
    this.c4m07 = this.hora07['minute'];
    this.c4time07 = this.c4h07 + ":" + this.c4m07;

    this.c4h08 = this.hora08['hour'];
    this.c4m08 = this.hora08['minute'];
    this.c4time08 = this.c4h08 + ":" + this.c4m08;

    if (this.c4T7Armed == true) this.c4T7ArmedN = 1; else this.c4T7ArmedN = 0;
    if (this.c4T8Armed == true) this.c4T8ArmedN = 1; else this.c4T8ArmedN = 0;

    if (this.c4DayD == true) this.c4DaysP = '1'; else this.c4DaysP = '0';
    if (this.c4DayL == true) this.c4DaysP += '1'; else this.c4DaysP += '0';
    if (this.c4DayM == true) this.c4DaysP += '1'; else this.c4DaysP += '0';
    if (this.c4DayX == true) this.c4DaysP += '1'; else this.c4DaysP += '0';
    if (this.c4DayJ == true) this.c4DaysP += '1'; else this.c4DaysP += '0';
    if (this.c4DayV == true) this.c4DaysP += '1'; else this.c4DaysP += '0';
    if (this.c4DayS == true) this.c4DaysP += '1'; else this.c4DaysP += '0';
    
    //S2
    this.c4h15 = this.hora15['hour'];
    this.c4m15 = this.hora15['minute'];
    this.c4time15 = this.c4h15 + ":" + this.c4m15;

    this.c4h16 = this.hora16['hour'];
    this.c4m16 = this.hora16['minute'];
    this.c4time16 = this.c4h16 + ":" + this.c4m16;

    if (this.c4T15Armed == true) this.c4T15ArmedN = 1; else this.c4T15ArmedN = 0;
    if (this.c4T16Armed == true) this.c4T16ArmedN = 1; else this.c4T16ArmedN = 0;

    if (this.c4DayD2 == true) this.c4DaysP2 = '1'; else this.c4DaysP2 = '0';
    if (this.c4DayL2 == true) this.c4DaysP2 += '1'; else this.c4DaysP2 += '0';
    if (this.c4DayM2 == true) this.c4DaysP2 += '1'; else this.c4DaysP2 += '0';
    if (this.c4DayX2 == true) this.c4DaysP2 += '1'; else this.c4DaysP2 += '0';
    if (this.c4DayJ2 == true) this.c4DaysP2 += '1'; else this.c4DaysP2 += '0';
    if (this.c4DayV2 == true) this.c4DaysP2 += '1'; else this.c4DaysP2 += '0';
    if (this.c4DayS2 == true) this.c4DaysP2 += '1'; else this.c4DaysP2 += '0';



    //PUB
    this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/timer1", '{"Arm":' + this.c1T1ArmedN + ',"Mode":0,"Time":"' + this.c1time01 + '","Window":0,"Days":"' + this.c1DaysP + '","Repeat":1,"Output":1,"Action":1}', { qos: 0, retain: false });
    this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/timer2", '{"Arm":' + this.c1T2ArmedN + ',"Mode":0,"Time":"' + this.c1time02 + '","Window":0,"Days":"' + this.c1DaysP + '","Repeat":1,"Output":1,"Action":0}', { qos: 0, retain: false });
    this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/timer3", '{"Arm":' + this.c2T3ArmedN + ',"Mode":0,"Time":"' + this.c2time03 + '","Window":0,"Days":"' + this.c2DaysP + '","Repeat":1,"Output":2,"Action":1}', { qos: 0, retain: false });
    this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/timer4", '{"Arm":' + this.c2T4ArmedN + ',"Mode":0,"Time":"' + this.c2time04 + '","Window":0,"Days":"' + this.c2DaysP + '","Repeat":1,"Output":2,"Action":0}', { qos: 0, retain: false });
    this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/timer5", '{"Arm":' + this.c3T5ArmedN + ',"Mode":0,"Time":"' + this.c3time05 + '","Window":0,"Days":"' + this.c3DaysP + '","Repeat":1,"Output":3,"Action":1}', { qos: 0, retain: false });
    this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/timer6", '{"Arm":' + this.c3T6ArmedN + ',"Mode":0,"Time":"' + this.c3time06 + '","Window":0,"Days":"' + this.c3DaysP + '","Repeat":1,"Output":3,"Action":0}', { qos: 0, retain: false });
    this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/timer7", '{"Arm":' + this.c4T7ArmedN + ',"Mode":0,"Time":"' + this.c4time07 + '","Window":0,"Days":"' + this.c4DaysP + '","Repeat":1,"Output":4,"Action":1}', { qos: 0, retain: false });
    this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/timer8", '{"Arm":' + this.c4T8ArmedN + ',"Mode":0,"Time":"' + this.c4time08 + '","Window":0,"Days":"' + this.c4DaysP + '","Repeat":1,"Output":4,"Action":0}', { qos: 0, retain: false });
    this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/timer9", '{"Arm":' + this.c1T9ArmedN + ',"Mode":0,"Time":"' + this.c1time09 + '","Window":0,"Days":"' + this.c1DaysP2 + '","Repeat":1,"Output":1,"Action":1}', { qos: 0, retain: false });
    this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/timer10", '{"Arm":' + this.c1T10ArmedN + ',"Mode":0,"Time":"' + this.c1time10 + '","Window":0,"Days":"' + this.c1DaysP2 + '","Repeat":1,"Output":1,"Action":0}', { qos: 0, retain: false });
    this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/timer11", '{"Arm":' + this.c2T11ArmedN + ',"Mode":0,"Time":"' + this.c2time11 + '","Window":0,"Days":"' + this.c2DaysP2 + '","Repeat":1,"Output":2,"Action":1}', { qos: 0, retain: false });
    this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/timer12", '{"Arm":' + this.c2T12ArmedN + ',"Mode":0,"Time":"' + this.c2time12 + '","Window":0,"Days":"' + this.c2DaysP2 + '","Repeat":1,"Output":2,"Action":0}', { qos: 0, retain: false });
    this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/timer13", '{"Arm":' + this.c3T13ArmedN + ',"Mode":0,"Time":"' + this.c3time13 + '","Window":0,"Days":"' + this.c3DaysP2 + '","Repeat":1,"Output":3,"Action":1}', { qos: 0, retain: false });
    this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/timer14", '{"Arm":' + this.c3T14ArmedN + ',"Mode":0,"Time":"' + this.c3time14 + '","Window":0,"Days":"' + this.c3DaysP2 + '","Repeat":1,"Output":3,"Action":0}', { qos: 0, retain: false });
    this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/timer15", '{"Arm":' + this.c4T15ArmedN + ',"Mode":0,"Time":"' + this.c4time15 + '","Window":0,"Days":"' + this.c4DaysP2 + '","Repeat":1,"Output":4,"Action":1}', { qos: 0, retain: false });
    this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/timer16", '{"Arm":' + this.c4T16ArmedN + ',"Mode":0,"Time":"' + this.c4time16 + '","Window":0,"Days":"' + this.c4DaysP2 + '","Repeat":1,"Output":4,"Action":0}', { qos: 0, retain: false });
    //cmd/bodega6/timer1 {"Arm":1,"Mode":0,"Time":"22:02","Window":0,"Days":"1111111","Repeat":1,"Output":1,"Action":2}

    this.publica();
  }

  public ngOnInit() {
  }

  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, { qos: 1, retain: true });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onChange(ob: MatSlideToggleChange) {
    if (ob.checked == true) {
      this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/POWER1", "1", { qos: 0, retain: false });
    }
    else {
      this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/POWER1", "0", { qos: 0, retain: false });
    }
    this.publica();
  }

  onChange2(ob: MatSlideToggleChange) {
    if (ob.checked == true) {
      this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/POWER2", "1", { qos: 0, retain: false });
    }
    else {
      this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/POWER2", "0", { qos: 0, retain: false });
    }
    this.publica();
  }

  onChange3(ob: MatSlideToggleChange) {
    if (ob.checked == true) {
      this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/POWER3", "1", { qos: 0, retain: false });
    }
    else {
      this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/POWER3", "0", { qos: 0, retain: false });
    }
    this.publica();
  }

  onChange4(ob: MatSlideToggleChange) {
    if (ob.checked == true) {
      this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/POWER4", "1", { qos: 0, retain: false });
    }
    else {
      this._mqttService.unsafePublish("cmnd/" + this.sonoffName + "/POWER4", "0", { qos: 0, retain: false });
    }
    this.publica();
  }

  convertirFecha(str) {
    var fecha = str.split("-", 3);
    return fecha[2] + " de " + this.meses(fecha[1]) + " del " + fecha[0]
  }

  meses(str) {
    str = str - 1;
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return meses[str];
  }

}

/*
<mat-accordion>
  <mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        Segmento 1
      </mat-panel-title>
    </mat-expansion-panel-header>
    OK
  </mat-expansion-panel>
  <mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        Segmento 2
      </mat-panel-title>
    </mat-expansion-panel-header>
    OK
  </mat-expansion-panel>
</mat-accordion>
*/

/*

  */