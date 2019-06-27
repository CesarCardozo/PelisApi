import { Component, OnInit, Input } from '@angular/core';
import { IPeli } from 'src/app/IResultadoApi';

@Component({
  selector: 'app-peli-card',
  templateUrl: './peli-card.page.html',
  styleUrls: ['./peli-card.page.scss'],
})
export class PeliCardPage implements OnInit {

  @Input() peli:IPeli;

  constructor() { }

  ngOnInit() {
  }

}
