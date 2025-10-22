import {UsuarioNombres} from './usuario-nombres.interface';
import {UsuarioUbicacion} from './usuario-ubicacion.interface';
import {UsuarioFechaNacimiento} from './usuario-fecha-nacimiento.interface';
import {UsuarioFoto} from './usuario-foto.interface';

export interface RandomUser {
  gender: string;
  name: UsuarioNombres;
  location: UsuarioUbicacion;
  email: string;
  dob: UsuarioFechaNacimiento;
  picture: UsuarioFoto;
}
