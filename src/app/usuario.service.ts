import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    private url = 'hhtp://localhost:8080/usuario';

    constructor(private http: HttpClient) { }

    public salvar(usuario: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(this.url, usuario);
    }

    public delete(id: string): Observable<any> {
        return this.http.delete(this.url + '/' + id );
    }

    public getUsuario(): Usuario {
        let usuario = new Usuario();
        usuario.nome = 'Dirceu Junior';
        usuario.email = 'djjunior1997@hotmail.com';

        return usuario;
    }

    public listaUsuario(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.url);
    }

}
