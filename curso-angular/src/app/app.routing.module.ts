import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmesModule } from './filmes/filmes.module';
import { CadastroFilmesComponent } from './filmes/cadastro-filmes/cadastro-filmes.component';
import { ListagemFilmesComponent } from './filmes/listagem-filmes/listagem-filmes.component';

const routes: Routes = [

  { // Rotas vazias serão redirecionadas para a rota filmes
      path: '',
      redirectTo: 'filmes',
      pathMatch: 'full'
  },
  {
    // Rota filmes
    path: 'filmes',

    // Filhos da rota filmes - Rotas que estão dentro de filmes
    // Ex: localhost:4200/filmes/abc - O "abc" é filho de "/filmes"
    children: [
      {
        // Digitou: localhost:4200/filmes - Vai cair no componente que lista os filmes
        path: '',
        component: ListagemFilmesComponent
      },
      {
         // Digitou: localhost:4200/filmes/cadastro - Vai cair no componente que cadastra os filmes
        path: 'cadastro',
        component: CadastroFilmesComponent,
        pathMatch: 'full'
      }
    ]
  },
  { path: '**', redirectTo: 'filmes' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FilmesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
