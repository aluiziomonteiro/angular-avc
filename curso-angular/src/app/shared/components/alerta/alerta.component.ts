import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'dio-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss']
})
export class AlertaComponent implements OnInit {

  titulo = 'Sucesso';
  descricao = 'Seu registro foi salvo com sucesso';
  btnSucesso = 'OK';
  btnCancelar = 'Cancelar';
  corBtn = 'primary';
  possuirBtnFechar = false;


  constructor(
    public dialogRef: MatDialogRef<AlertaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

    if (this.data){ // se existe o data
      //veja se os campos estão preenchidos:
      //titulo é igual ao data.titulo se ele existir ou então, ele vai ser titulo mesmo
      this.titulo = this.data.titulo || this.titulo;
      this.descricao = this.data.descricao || this.descricao;
      this.btnSucesso = this.data.btnSucesso || this.btnSucesso;
      this.btnCancelar = this.data.btnCancelar || this.btnCancelar;
      this.corBtn = this.data.corBtn || this.corBtn;
      this.possuirBtnFechar = this.data.possuirBtnFechar || this.possuirBtnFechar;
    }
  }
}
