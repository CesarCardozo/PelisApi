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
  pelisReleased: IPeli[];
  isSearch = false;

  constructor(private _serviciosService: ServiciosService) { }
  searchMovie() {
    this.isSearch = true;
    this._serviciosService.loadToFind(this.filter).subscribe(data => {
      console.log(data);
      this.pelisReleased = data.results;
    });
  }
}
