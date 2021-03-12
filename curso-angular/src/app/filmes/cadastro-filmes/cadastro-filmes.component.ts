import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FilmesService } from 'src/app/core/filmes.service';
import { ValidarCamposService } from 'src/app/shared/components/campos/validar-campos.service';
import { Filme } from 'src/app/shared/models/filme';

@Component({
  selector: 'dio-cadastro-filmes',
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.scss']
})
export class CadastroFilmesComponent implements OnInit {

  cadastro: FormGroup;
  generos: Array<string>;

  constructor(public validacao: ValidarCamposService,
              private fb: FormBuilder,
              private filmesService: FilmesService) { }

  get f(){
    return this.cadastro.controls;
  }

  ngOnInit() {

    this.cadastro = this.fb.group({

      titulo: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      urlFoto: ['', [Validators.minLength(10)]],
      dtLancamento: ['', [Validators.required]],
      descricao: [''],
      nota: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
      urlIMDb: ['', [Validators.minLength(10)]],
      genero: ['', [Validators.required]] //
    });
    // Aqui
    this.generos = [ 'Ação', 'Aventura', 'Comédia', 'Drama', 'Ficção Científica', 'Romance', 'Terror' ];
  }

  submit(): void{  
    this.cadastro.markAllAsTouched(); 
    if(this.cadastro.invalid){ 
      return; 
    }

    const filme = this.cadastro.getRawValue() as Filme;
    this.salvar(filme);

    //alert('Sucesso!\n\n'+ JSON.stringify(this.cadastro.value, null, 4));
  }

  reiniciarForm(): void{ 
    this.cadastro.reset();
  }

  private salvar(filme: Filme): void {
    this.filmesService.salvar(filme).subscribe(() => {
      alert('Sucesso');
    },
    () => {
      alert('Erro ao salvar');
    });
  }
}
