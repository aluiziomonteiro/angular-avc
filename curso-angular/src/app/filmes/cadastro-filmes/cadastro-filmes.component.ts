import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { FilmesService } from 'src/app/core/filmes.service';
import { AlertaComponent } from 'src/app/shared/components/alerta/alerta.component';
import { ValidarCamposService } from 'src/app/shared/components/campos/validar-campos.service';
import { Alerta } from 'src/app/shared/models/alerta';
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
              public dialog: MatDialog,
              private fb: FormBuilder,
              private filmesService: FilmesService, 
              private router: Router // <--
              ) { }

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
      // Configuração do alerta
      const config = {
        data: {
          btnSucesso:  'ir para a listagem',
          btnCancelar: 'Cadastrar um novo filme',
          corBtnCancelar: 'primary',
          possuirBtnFechar: true
        } as Alerta
      };
      // Ao abrir, use O AlertaComponent com as configurações definidas acima.
      const dialogRef = this.dialog.open(AlertaComponent, config);

      // Após fechar, pegue o valor da opcao e tome uma rota com base nesse valor.
      dialogRef.afterClosed().subscribe((opcao: boolean) => {
        if (opcao ){
          this.router.navigateByUrl('filmes');
        } else {
          this.reiniciarForm();
        }
      })
    },
    () => {
      const config = {
        data: {
          titulo: 'Erro ao salvar o registro!',
          descricao: 'Não conseguimos salvar o seu registro. Tente mais tarde!',
          corBtnSucesso: 'warn',
          btnSucesso:  'Fechar'
        } as Alerta
      };
      // Abra o dialog usando o nosso componente de alerta e com as configurações que definimos
      this.dialog.open(AlertaComponent, config);
    });
  }
}
