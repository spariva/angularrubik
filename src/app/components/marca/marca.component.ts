import { Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/Cubo';
import { ServiceCubos } from '../../services/service.cubos';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrl: './marca.component.css'
})
export class MarcaComponent implements OnInit{
  public cubos!: Cubo[];

  constructor(private _service: ServiceCubos, private _activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) =>{
      let marca = params['marca'];
      
      this._service.getCubosMarcas(marca).subscribe(response => {
        this.cubos = response;
    })
    })
  }
}
