import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilmesService } from 'src/app/core/filmes.service';
import { Filme } from 'src/app/shared/models/filme';

@Component({
  selector: 'dio-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {

  readonly qtdPagina = 4;
  pagina: number = 0;
  texto: string;
  genero: string;
  filmes: Filme[] = [];
  filtrosListagem: FormGroup;
  generos: Array<string>; 

  constructor(private filmesService: FilmesService,
              private fb: FormBuilder){ }

  ngOnInit(): void {
    this.filtrosListagem = this.fb.group({ 
      texto: [''],
      generos:['']}
    );

    this.filtrosListagem.get('texto').valueChanges
      .subscribe((val: string) => {
        this.texto = val;
        this.resetarConsulta(); // <--
    });

    this.filtrosListagem.get('generos').valueChanges
    .subscribe((val: string) => {
      this.genero = val;
      this.resetarConsulta(); // <--
    });
    
    this.generos = [ 'Ação', 'Aventura', 'Comédia', 'Drama', 'Ficção Científica', 'Romance', 'Terror' ]; //<--

    this.listarFilmes();
  }

  onScroll(): void {
    this.listarFilmes();
  }

  listarFilmes(): void {
    this.pagina++;
    this.filmesService.listar(this.pagina, this.qtdPagina, this.texto, this.genero)
    .subscribe((filmes: Filme[]) => this.filmes.push(...filmes))
  }

  private resetarConsulta(): void {
    this.pagina = 0;
    this.filmes = [];
    this.listarFilmes();
  }
}
