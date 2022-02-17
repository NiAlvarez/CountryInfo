import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  buscarPais(terminoDeBusqueda : string): Observable<Country[]>{

    const url = `${this._apiUrl}/name/${terminoDeBusqueda}`

    return this.http.get<Country[]>(url);
  }

  buscarCapital(terminoDeBusqueda : string): Observable<Country[]>{
    const url = `${this._apiUrl}/capital/${terminoDeBusqueda}`
    return this.http.get<Country[]>(url);
  }


}
