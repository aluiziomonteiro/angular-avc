import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'dio-cadastro-filmes',
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.scss']
})
export class CadastroFilmesComponent implements OnInit {

  cadastro: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.cadastro = this.fb.group({

      titulo: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      urlFoto: ['', [Validators.minLength(10)]],
      dtLancamento: ['', [Validators.required]],
      descricao: [''],
      nota: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
      urlIMDb: ['', [Validators.minLength(10)]],
      genero: ['', [Validators.required]]
    });
  }

  salvar(): void{ // Não retorna nada
    if(this.cadastro.invalid){ // Se o form for inválido...
      return; // Retorna nada
    }

    // Pega o value do nosso cadastro e tranforme em Json e exiba via alert só pra gente fazer um teste rápido mesmo...
    alert('Sucesso!\n\n'+ JSON.stringify(this.cadastro.value, null, 4));
  }

  reiniciarForm(): void{ // Também não retorna nada
    this.cadastro.reset(); // Reinicia o cadastro
  }
}
