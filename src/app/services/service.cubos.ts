import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class ServiceCubos {
    constructor(private _http: HttpClient) { }

    getCubos(): Observable<any> {
        let request = "api/cubos";
        let url = environment.urlApi + request;
        return this._http.get(url);
    }

    getMarcas(): Observable<any> {
        let request = "api/cubos/marcas";
        let url = environment.urlApi + request;
        return this._http.get(url);
    }

    getCubosMarcas(marca: string): Observable<any> {
        let request = "api/Cubos/CubosMarca/" + marca;
        let url = environment.urlApi + request;
        return this._http.get(url);
    }

    getCubo(id: number): Observable<any> {
        let request = "api/Cubos/" + id;
        let url = environment.urlApi + request;
        return this._http.get(url);
    }

    getComentarios(id: number): Observable<any> {
        let request = "api/comentarioscubo/getcomentarioscubo/" + id;
        let url = environment.urlApi + request;
        return this._http.get(url);
    }

    login(email: string, password: string): Observable<any> {
        let request = "api/Manage/Login";
        let url = environment.urlApi + request;
        let body = {
            "email": email,
            "password": password
        };

        return this._http.post(url, body);
    }

    getPerfil(): Observable<any> {
        let request = "api/Manage/perfilusuario";
        let url = environment.urlApi + request;
        let header = new HttpHeaders();
        let token = localStorage.getItem("token");
        console.log("token service" + token);
        header = header.set("Authorization", "Bearer " + token);

        return this._http.post(url, header);
    }

    // async getPerfil(){
    //     let url = Global.urlApi + "api/manage/perfilusuario";
    //     let response = await fetch(url, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": "Bearer " + localStorage.getItem("token")
    //         }
    //     })

    //     let data = await response.json();
    //     return data;
    // }

    // async getCompras(){
    //     let url = Global.urlApi + "api/compra/comprasusuario";
    //     let response = await fetch(url, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": "Bearer " + localStorage.getItem("token")
    //         }
    //     })

    //     let data = await response.json();
    //     return data;
    // }

    // async hacerPedido(idCubo){
    //     let url = Global.urlApi + "api/compra/insertarpedido/" + idCubo;
    //     let response = await fetch(url, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": "Bearer " + localStorage.getItem("token")
    //         }
    //     })
    //     return response;
    // }


}