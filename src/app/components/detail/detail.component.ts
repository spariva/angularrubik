import { Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/Cubo';
import { ServiceCubos } from '../../services/service.cubos';
import { ActivatedRoute, Params } from '@angular/router';
import { Comentario } from '../../models/comentario';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{
  public cubo!: Cubo;
  public comentarios!: Comentario[];

  constructor(private _service: ServiceCubos, private _activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) =>{
      let id = params['id'];
      
      this._service.getCubo(id).subscribe(response => {
        this.cubo = response;
    })
    this._service.getComentarios(id).subscribe(response => {
      this.comentarios = response;
  })
    })
  }
}
