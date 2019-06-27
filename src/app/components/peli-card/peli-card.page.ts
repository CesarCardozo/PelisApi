import { Component, OnInit, Input } from '@angular/core';
import { IPeli } from 'src/app/IResultadoApi';
import { environment } from 'src/environments/environment.prod';
import { ModalController } from '@ionic/angular';
import { PeliDetailsPage } from '../peli-details/peli-details.page';

@Component({
  selector: 'app-peli-card',
  templateUrl: './peli-card.page.html',
  styleUrls: ['./peli-card.page.scss'],
})
export class PeliCardPage implements OnInit {

  @Input() peli:IPeli;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.peli.poster_path = environment.apiImages + this.peli.poster_path;
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PeliDetailsPage,
      componentProps: {
        'peli': this.peli,
      }
    });
    return await modal.present();
  }

}
