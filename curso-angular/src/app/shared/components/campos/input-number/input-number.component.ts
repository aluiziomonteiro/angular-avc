import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidarCamposService } from '../validar-campos.service';

@Component({
  selector: 'dio-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent {

  @Input() titulo: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  // Não precisa colocar o tipo, pois o angula entende que é numérico por conta da atribuição 
  // Caso nenhum valor seja passado, os inputs vão assumir estes valores por default
  @Input() minimo = 0;
  @Input() maximo = 10;
  @Input() step = 1;

  constructor(public validacao: ValidarCamposService) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}
