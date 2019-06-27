import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';
import { IPeli } from '../IResultadoApi';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  peli: IPeli = { "vote_count": 10208, "id": 245891, "video": false, "vote_average": 7.2, "title": "John Wick", "popularity": 59.293, "poster_path": "\/b9uYMMbm87IBFOq59pppvkkkgNg.jpg", "original_language": "en", "original_title": "John Wick", "genre_ids": [28, 53], "backdrop_path": "\/mFb0ygcue4ITixDkdr7wm1Tdarx.jpg", "adult": false, "overview": "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.", "release_date": "2014-10-22" }

  constructor(private _serviciosService: ServiciosService) {
    this._serviciosService.loadPelisFromDate().subscribe(data => {
      console.log(data);
    })
  }


}
