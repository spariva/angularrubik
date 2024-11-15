import { Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/Cubo';
import { ServiceCubos } from '../../services/service.cubos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public cubos!: Cubo[];

  constructor(private _service: ServiceCubos) { }

  ngOnInit(): void {
      this._service.getCubos().subscribe(response => {
          this.cubos = response;
      })
  }

}
