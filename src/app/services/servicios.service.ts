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
    return this.Http.get<IResultadoApi>("https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key="
     + environment.apiKey); 
  }
}
