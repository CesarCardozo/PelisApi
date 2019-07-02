import { Component } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';
import { IPeli } from '../IResultadoApi';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  filter = '';
  pelisReleased: IPeli[] = [];
  sizePelis = 0;
  isSearch = false;

  constructor(private servicio: ServiciosService) { }
  searchMovie() {
    this.servicio.loadToFind(this.filter).subscribe(data => {
      console.log(data);
      this.isSearch = true;
      this.sizePelis = data.results.length;
      this.pelisReleased = data.results;
    });
  }
}
