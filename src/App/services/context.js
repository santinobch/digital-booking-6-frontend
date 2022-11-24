import {createContext} from 'react'
import AuthModel from '../models/auth.model';
import UsuarioModel from '../models/usuario.model';

export const UsuarioContext = createContext(new UsuarioModel);
export const AuthContext = createContext(new AuthModel);