import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

    public usuarios: Usuario[];
    constructor(private usuarioService: UsuarioService) { }

    ngOnInit() {
        this.listaUsuario();
    }

    public listaUsuario() {
        this.usuarioService.listaUsuario().subscribe(
            response => {
                this.usuarios = response;
            },
            error => {
                alert('Deu ruim no banco');
            }
        );
    }

    public deletar(id: string) {
        this.usuarioService.delete(id).subscribe(
            r => {
                this.usuarioService.listaUsuario();
            }
        );
    }
}
