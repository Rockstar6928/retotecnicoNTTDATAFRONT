import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {RandomUserResponseDto} from '../interfaces';
import {GenericResponse} from '../interfaces/GenericResponse';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  http = inject(HttpClient);
  apiUrl = environment.apiUrl;

  getUsuarios(request: any) {

    return this.http.post<GenericResponse<RandomUserResponseDto>>(`${this.apiUrl}`, request);
  }

}
