import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceCubos } from '../../services/service.cubos';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit{
  public nombre!: string;
  public email!: string;

  constructor(private _service: ServiceCubos,  private _router: Router) {}

  ngOnInit(): void {
      this._service.getPerfil().subscribe(response =>{
        console.log(response);
        this.nombre = response.nombre;
        this.email = response.email;
      })
  }
}
