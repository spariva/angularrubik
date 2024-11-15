import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(private _service: ServiceCubos, private _activeRoute: ActivatedRoute, private _router: Router) {
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {
    
  }

  iniciarSesion() {
    console.log(this.email);
    this._service.login(this.email, this.password).subscribe(response => {
      localStorage.setItem("token", response.response);
      console.log(response.response);
      this._router.navigate(['/perfil']);
    },
      error => {
        alert('Usuario o contraseña incorrectos');
      })
  }
}
