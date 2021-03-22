import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from 'src/app/core/filmes.service';
import { Filme } from 'src/app/shared/models/filme';

@Component({
  selector: 'dio-visualizar-filmes',
  templateUrl: './visualizar-filmes.component.html',
  styleUrls: ['./visualizar-filmes.component.scss']
})
export class VisualizarFilmesComponent implements OnInit {
  readonly semFoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEemlgFtRl2mVB_7J_ypS-JHchAMWKXNkANw&usqp=CAU';
  filme: Filme;
  constructor(private activatedRoute: ActivatedRoute,
              private filmesService: FilmesService) { }

  ngOnInit() {
    this.visualizar(this.activatedRoute.snapshot.params['id']);
  }

  private visualizar(id: number): void {
    this.filmesService.visualizar(id).subscribe((filme:Filme) => this.filme = filme);
  }

}
