import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.page.html',
  styleUrls: ['./bitacora.page.scss'],
})
export class BitacoraPage implements OnInit {

  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }
  async presentLoading(message) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: message,
      duration: 2000
    });
    await loading.present();

    loading.onDidDismiss();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      cssClass: 'my-custom-class',
      message: 'Buen travajo',
      duration: 3000,
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'people',
          text: 'Guardar captura',
          handler: () => {
            this.presentLoading('Cerrando sesion');
            this.router.navigateByUrl('home');
          }
        },
        {
          side: 'end',
          icon: 'camera',
          text: 'Ver captura',
          handler: () => {
            this.presentLoading('Captura');
            this.router.navigateByUrl('bienvenido');
          }
        }
      ]
    });
    await toast.present();

    await toast.onDidDismiss();
  }



}
