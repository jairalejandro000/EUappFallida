import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BienvenidoPageRoutingModule } from './bienvenido-routing.module';

import { BienvenidoPage } from './bienvenido.page';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BienvenidoPageRoutingModule,
  ],
  declarations: [BienvenidoPage],
})
export class BienvenidoPageModule {}
