import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';  

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
      buttons: ['OK']  
    });  
    await alert.present();
  }  
}  
