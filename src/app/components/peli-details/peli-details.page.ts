import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-peli-details',
  templateUrl: './peli-details.page.html',
  styleUrls: ['./peli-details.page.scss'],
})
export class PeliDetailsPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalController.dismiss();
  }

}
