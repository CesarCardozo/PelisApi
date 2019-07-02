import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IPeli } from '../IResultadoApi';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  pelis:IPeli[];

  constructor(private storage: Storage) {}
  
  ngOnInit(){
    this.pelis=[];
    this.storage.length().then((keysLength: Number) => {
      for(let i=0; i<keysLength;i++){
        this.storage.get('peli-'+i).then((val:IPeli) => {
          this.pelis[this.pelis.length]=val;
        }).catch((error) => {
          console.log(error);
        });
      }
    });
  }

  updateFavs(){
    this.pelis=[];
    this.storage.length().then((keysLength: Number) => {
      for(let i=0; i<keysLength;i++){
        this.storage.get('peli-'+i).then((val:IPeli) => {
          this.pelis[this.pelis.length]=val;
        }).catch((error) => {
          console.log(error);
        });
      }
    });
  }

  displayOrNoMessage(){
    return this.pelis.length==0;
  }
}
