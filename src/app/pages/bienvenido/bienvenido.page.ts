import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage {
  constructor(
    public alertCtrl: AlertController,
    private router: Router
  ) { }
  capturarB(){
    this.router.navigateByUrl('bitacora');
  }
  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'BitacorApp',
      subHeader: 'Que tenga un buen día',
      buttons: [{
        text: 'NO',
        handler: () => {  this.abrirCamara()
        }
      }]
    });
    await alert.present();
  }
  async abrirCamara(){
    const image = await Camera.getPhoto({
      quality: 90,
      saveToGallery: true,
      source: CameraSource.Camera,
      presentationStyle: "popover",
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
  }
}
