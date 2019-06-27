import { Component } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  filter = '';

  constructor(private _serviciosService: ServiciosService) { }

  searchMovie() {
    this._serviciosService.loadToFind(this.filter).subscribe(data => {
      console.log(data);
    });
  }
}
