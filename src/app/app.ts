import {ChangeDetectorRef, Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsuariosService} from './services/usuarios.service';
import {RandomUser} from './interfaces';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  usuariosService = inject(UsuariosService);
  changeDetector = inject(ChangeDetectorRef);
  usuariosLista: RandomUser[] = [];

  traerUsuarios() {
    const payload = {
      cantidadUsuarios: 10
    }
    this.usuariosService.getUsuarios(payload).subscribe({
      next: (response) => {
        const okay = response.success;
        if (okay) {
          this.usuariosLista = response.data.results;
          this.changeDetector.detectChanges();
        } else {
          alert("Error al obtener los usuarios");
          console.log("Error: ", response.message);
        }
      },
      error: (error: HttpErrorResponse) => {
        alert("Error al obtener los usuarios");
        console.log("Error: ", error);
      }
    })
  }


}
