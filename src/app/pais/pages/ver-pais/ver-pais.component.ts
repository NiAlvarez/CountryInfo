import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  //signo de admiracion para forzar typescript a que me tome la posibilidad de tener un valor
  pais!: Country;

  constructor(
    private paisService: PaisService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    //TODO: buscar una forma para no tener que anidar subscribes ... probablemente RXJS switchMap

    this.activatedRoute.params
      .pipe(
        switchMap((param) => this.paisService.getPaisPorId(param['id'])),
        tap(console.log)
      )
      .subscribe((res:Country[]) => {  
        res.forEach(element => { 
        this.pais = element
        })       
      });    

  }

}
