import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-peli-details',
  templateUrl: './peli-details.page.html',
  styleUrls: ['./peli-details.page.scss'],
})
export class PeliDetailsPage implements OnInit {

  @Input() peli: string;

  constructor(public modalController: ModalController,
    private storage: Storage) { }

  ngOnInit() {
  }

  salir(){
    this.modalController.dismiss();
  }

  addToFav(){
    this.storage.length().then((keysLength: Number) => {
      this.storage.set('peli-' + keysLength, this.peli);
    });
  }

}
