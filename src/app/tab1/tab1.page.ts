import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';
import { IPeli } from '../IResultadoApi';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
 
  pelisReleased: IPeli[]=[];
  pelisMostPopular: IPeli[]=[];
  pelisColombia: IPeli[]=[];

  constructor(private _serviciosService: ServiciosService) {}

  ngOnInit(): void {
    this._serviciosService.loadPelisFromDate().subscribe(data => {
      this.pelisReleased = data.results;
    });
    this._serviciosService.loadPelisMostPoPular().subscribe(data => {
      this.pelisMostPopular = data.results;
    });
    this._serviciosService.loadPelisColmbia().subscribe(data => {
      this.pelisColombia = data.results;
    });
  }



}
