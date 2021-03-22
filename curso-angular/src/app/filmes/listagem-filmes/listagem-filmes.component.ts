import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractWebDriver } from 'protractor/built/browser';
import { debounceTime } from 'rxjs/operators'
import { FilmesService } from 'src/app/core/filmes.service';
import { ConfigParams } from 'src/app/shared/models/config-params';
import { Filme } from 'src/app/shared/models/filme';

@Component({
  selector: 'dio-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {

  readonly semFoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEemlgFtRl2mVB_7J_ypS-JHchAMWKXNkANw&usqp=CAU';

  config: ConfigParams = {
    pagina: 0,
    limite: 4
  }

  filmes: Filme[] = [];
  filtrosListagem: FormGroup;
  generos: Array<string>; 

  constructor(private filmesService: FilmesService,
              private fb: FormBuilder,
              private router: Router){ }

  ngOnInit(): void {
    this.filtrosListagem = this.fb.group({ 
      texto: [''],
      generos:['']}
    );

  

    this.filtrosListagem.get('texto').valueChanges
      .subscribe((val: string) => {
        this.config.pesquisa = val;
        this.resetarConsulta();
    });

    this.filtrosListagem.get('generos').valueChanges
    .pipe(debounceTime(400))
    .subscribe((val: string) => {
      this.config.campo = {tipo: 'genero', valor: val};
      this.resetarConsulta();
    });
    
    this.generos = [ 'Ação', 'Aventura', 'Comédia', 'Drama', 'Ficção Científica', 'Romance', 'Terror' ]; //<--

    this.listarFilmes();
  }

  onScroll(): void {
    this.listarFilmes();
  }

  abrir(id: number): void {
    this.router.navigateByUrl('/filmes/'+ id);
  }

  private listarFilmes(): void {
    this.config.pagina++;
    this.filmesService.listar(this.config)
    .subscribe((filmes: Filme[]) => this.filmes.push(...filmes));
  }

  private resetarConsulta(): void {
    this.config.pagina = 0;
    this.filmes = [];
    this.listarFilmes();
  }
}