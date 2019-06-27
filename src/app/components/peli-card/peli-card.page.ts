import { Component, OnInit, Input } from '@angular/core';
import { IPeli } from 'src/app/IResultadoApi';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-peli-card',
  templateUrl: './peli-card.page.html',
  styleUrls: ['./peli-card.page.scss'],
})
export class PeliCardPage implements OnInit {

  @Input() peli:IPeli;

  constructor() { }

  ngOnInit() {
    this.peli.poster_path = environment.apiImages + this.peli.poster_path;
  }

}
