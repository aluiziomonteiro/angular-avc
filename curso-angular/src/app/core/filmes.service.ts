import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigParams } from '../shared/models/config-params';
import { Filme } from '../shared/models/filme';
import { ConfigParamsService } from './config-params.service';

const url = 'http://localhost:3000/filmes/';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http: HttpClient,
              private configService: ConfigParamsService) { }
  
  salvar(filme: Filme): Observable<Filme> {
    return this.http.post<any>(url, filme);
  }

  listar(config: ConfigParams): Observable<Filme[]>{
    const configParams = this.configService.configuraParametros(config);
    return this.http.get<Filme[]>(url, {params: configParams});
  }

  visualizar(id: number): Observable<Filme> {
    return this.http.get<Filme>(url + id);
  }
  
  excluir(id: number): Observable <void>{
    return this.http.delete<void>(url + id);
  }

  editar(filme: Filme): Observable <Filme> {
    return this.http.put<Filme>(url + filme.id, filme);
  } 
}