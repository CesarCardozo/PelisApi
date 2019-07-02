import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-peli-details',
  templateUrl: './peli-details.page.html',
  styleUrls: ['./peli-details.page.scss'],
})
export class PeliDetailsPage implements OnInit {

  @Input() peli: string;

  constructor(public modalController: ModalController,
    private storage: Storage,
    public toastController: ToastController) { }

  ngOnInit() {
  }

  salir(){
    this.modalController.dismiss();
  }

  async addToFav(){
    this.storage.length().then((keysLength: Number) => {
      this.storage.set('peli-' + keysLength, this.peli);
    });
    const toast = await this.toastController.create({
      message: 'Pelicula agregada a favoritos',
      duration: 2000
    });
    toast.present();
  }
}
