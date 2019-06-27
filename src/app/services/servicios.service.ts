import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IResultadoApi } from 'src/app/IResultadoApi';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(public Http: HttpClient) { }

  loadPelisFromDate() {
    return this.Http.get<IResultadoApi>('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-06-03&primary_release_date.lte=2019-06-09&api_key='
     + environment.apiKey);
  }

  loadPelisMostPoPular() {
    return this.Http.get<IResultadoApi>('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key='
     + environment.apiKey);
  }
  
  loadPelisColmbia() {
    return this.Http.get<IResultadoApi>('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key='
     + environment.apiKey);
  }
  loadToFind(toSearch) {
    return this.Http.get('https://api.themoviedb.org/3/search/company?api_key='
    + environment.apiKey + '&query=' + toSearch);
  }
}
