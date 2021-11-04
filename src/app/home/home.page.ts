import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private menu: MenuController,
    private router: Router
  ) {}

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  registrar(){
    console.log('j');
    this.router.navigateByUrl('bienvenido');
  }


}
