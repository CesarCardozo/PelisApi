import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private _serviciosService: ServiciosService) {
    this._serviciosService.loadPelisFromDate().subscribe(data => {
      console.log(data);
    })
  }


}
